import BulbOff from "../assets/icons/bulb-off.svg";
import Bulb from "../assets/icons/bulb.svg";
import MoonOff from "../assets/icons/moon-off.svg";
import Moon from "../assets/icons/moon.svg";
import Run from "../assets/icons/run.svg";
import StairsUp from "../assets/icons/stairs-up.svg";
import SunHigh from "../assets/icons/sun-high.svg";
import SunOff from "../assets/icons/sun-off.svg";
import Sun from "../assets/icons/sun.svg";

export const ICON_MAPPING = {
  bulb: Bulb,
  bulbOff: BulbOff,
  moon: Moon,
  moonOff: MoonOff,
  sunHigh: SunHigh,
  sun: Sun,
  sunOff: SunOff,
  run: Run,
  stairsUp: StairsUp,
};

export type IconName = keyof typeof ICON_MAPPING;
