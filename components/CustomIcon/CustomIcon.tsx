// components/Icon.tsx
import { useColorScheme } from "nativewind";
import React from "react";
import { SvgProps } from "react-native-svg";
import BulbOff from "../../assets/icons/bulb-off.svg";
import Bulb from "../../assets/icons/bulb.svg";
import MoonOff from "../../assets/icons/moon-off.svg";
import Moon from "../../assets/icons/moon.svg";
import SunHigh from "../../assets/icons/sun-high.svg";
import SunOff from "../../assets/icons/sun-off.svg";
import Sun from "../../assets/icons/sun.svg";

const icons = {
  bulb: Bulb,
  bulbOff: BulbOff,
  moon: Moon,
  moonOff: MoonOff,
  sunHigh: SunHigh,
  sun: Sun,
  sunOff: SunOff,
};

type IconName = keyof typeof icons;

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function CustomIcon({
  name,
  size = 32,
  color = "white",
  ...props
}: IconProps) {
  const { colorScheme } = useColorScheme();

  color = colorScheme === "dark" ? "white" : "black";
  const Component = icons[name];
  return <Component width={size} height={size} fill={color} {...props} />;
}
