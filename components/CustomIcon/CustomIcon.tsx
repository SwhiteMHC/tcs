// React Native
import React from "react";
import { SvgProps } from "react-native-svg";

// Types
import { ICON_MAPPING, IconName } from "@/types/icons.types";

// Hooks
import { useColorScheme } from "nativewind";

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function CustomIcon({
  name,
  size = 32,
  color = "white",
  strokeWidth = 2,
  ...props
}: IconProps) {
  const { colorScheme } = useColorScheme();

  color = colorScheme === "dark" ? "white" : "black";
  const Component = ICON_MAPPING[name];
  return (
    <Component
      width={size}
      height={size}
      stroke={color}
      {...props}
      strokeWidth={strokeWidth}
    />
  );
}
