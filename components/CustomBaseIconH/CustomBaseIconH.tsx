// components/Icon.tsx
import { ICON_MAPPING, IconName } from "@/types/icons.types";
import { useColorScheme } from "nativewind";
import React from "react";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function CustomBaseIconH({
  name,
  size = 32,
  color = "white",
  flip = false,
  ...props
}: IconProps & { flip?: boolean }) {
  const { colorScheme } = useColorScheme();
  color = colorScheme === "dark" ? "white" : "black";
  const Component = ICON_MAPPING[name];
  const flipStyle = flip ? { transform: [{ scaleX: -1 }] } : undefined;

  return (
    <View className="flex flex-row items-center justify-center">
      <Component
        width={size}
        height={size}
        stroke={color}
        {...props}
        style={[flipStyle]}
      />
    </View>
  );
}
