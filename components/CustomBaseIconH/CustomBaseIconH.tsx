// React
import React from "react";
import { View } from "react-native";

// Types
import { ICON_MAPPING, IconName } from "@/types/icons.types";

// Styles
import { useColorScheme } from "nativewind";
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
  const Component = ICON_MAPPING[name];
  const flipStyle = flip ? { transform: [{ scaleX: -1 }] } : undefined;
  const stroke =
    color !== "white" ? color : colorScheme === "dark" ? "white" : "black";

  return (
    <View className="flex flex-row items-center justify-center">
      <Component
        width={size}
        height={size}
        stroke={stroke}
        {...props}
        style={[flipStyle]}
      />
    </View>
  );
}
