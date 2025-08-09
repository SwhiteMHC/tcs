// components/Icon.tsx
import { useColorScheme } from "nativewind";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { SvgProps } from "react-native-svg";
import Run from "../../assets/icons/run.svg";

export enum AnimatedIconName {
  RUN = "run",
}
const icons: Record<AnimatedIconName, any> = {
  [AnimatedIconName.RUN]: Run,
};

type IconName = keyof typeof icons;

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function CustomAnimatedBaseIconH({
  name,
  size = 32,
  color = "white",
  flip = false,
  ...props
}: IconProps & { flip?: boolean }) {
  const { colorScheme } = useColorScheme();
  color = colorScheme === "dark" ? "white" : "black";
  const Component = icons[name];
  const flipStyle = flip ? { transform: [{ scaleX: -1 }] } : undefined;

  // Animations for each layer
  const fade1 = useRef(new Animated.Value(0)).current;
  const fade2 = useRef(new Animated.Value(0)).current;
  const fade3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        // Layer 1 fade in/out
        Animated.timing(fade1, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fade1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),

        // Layer 2 fade in/out
        Animated.timing(fade2, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fade2, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),

        // Layer 3 fade in/out
        Animated.timing(fade3, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fade3, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fade1, fade2, fade3]);

  return (
    <View className="flex flex-row items-center justify-center">
      <Animated.View style={{ opacity: fade3 }}>
        <Component
          width={size}
          height={size}
          stroke={color}
          {...props}
          style={[flipStyle, { marginRight: -size * 0.5 }]}
        />
      </Animated.View>
      <Animated.View style={{ opacity: fade2 }}>
        <Component
          width={size}
          height={size}
          stroke={color}
          {...props}
          style={[flipStyle, { marginRight: -size * 0.5 }]}
        />
      </Animated.View>
      <Animated.View style={{ opacity: fade1 }}>
        <Component
          width={size}
          height={size}
          stroke={color}
          {...props}
          style={[flipStyle]}
        />
      </Animated.View>
    </View>
  );
}
