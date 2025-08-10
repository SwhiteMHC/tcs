import BulbOff from "../assets/icons/bulb-off.svg";
import Bulb from "../assets/icons/bulb.svg";
import LineScan from "../assets/icons/line-scan.svg";
import LockOpen from "../assets/icons/lock-open.svg";
import Lock from "../assets/icons/lock.svg";
import MoonOff from "../assets/icons/moon-off.svg";
import Moon from "../assets/icons/moon.svg";
import Run from "../assets/icons/run.svg";
import SquareCheck from "../assets/icons/square-check.svg";
import Square from "../assets/icons/square.svg";
import StairsUp from "../assets/icons/stairs-up.svg";
import StarFilled from "../assets/icons/star-filled.svg";
import StarOutline from "../assets/icons/star-outline.svg";
import SunHigh from "../assets/icons/sun-high.svg";
import SunOff from "../assets/icons/sun-off.svg";
import Sun from "../assets/icons/sun.svg";
import SwitchVertical from "../assets/icons/switch-vertical.svg";

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
  square: Square,
  squareCheck: SquareCheck,
  lock: Lock,
  lockOpen: LockOpen,
  lineScan: LineScan,
  switchVertical: SwitchVertical,
  starOutline: StarOutline,
  starFilled: StarFilled,
};

export type IconName = keyof typeof ICON_MAPPING;
