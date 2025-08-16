import ArrowsMove from "../assets/icons/arrows-move.svg";
import Augment from "../assets/icons/augmented-reality.svg";
import BatteryFour from "../assets/icons/battery-4.svg";
import Book from "../assets/icons/book.svg";
import BulbOff from "../assets/icons/bulb-off.svg";
import Bulb from "../assets/icons/bulb.svg";
import Cards from "../assets/icons/cards.svg";
import Cart from "../assets/icons/cart.svg";
import Rook from "../assets/icons/chess-rook.svg";
import CircleCheck from "../assets/icons/circle-check.svg";
import CircleKey from "../assets/icons/circle-key.svg";
import CircleMinus from "../assets/icons/circle-minus.svg";
import CubeUnfolded from "../assets/icons/cube-unfolded.svg";
import Cube from "../assets/icons/cube.svg";
import Deselect from "../assets/icons/deselect.svg";
import Diamond from "../assets/icons/diamond.svg";
import Water from "../assets/icons/droplet.svg";
import FileBarcode from "../assets/icons/file-barcode.svg";
import Fire from "../assets/icons/flame.svg";
import GarosIcon from "../assets/icons/garos_icon.svg";
import KrakenIcon from "../assets/icons/kraken_icon.svg";
import Air from "../assets/icons/leaf.svg";
import LineScan from "../assets/icons/line-scan.svg";
import LockOpen from "../assets/icons/lock-open.svg";
import Lock from "../assets/icons/lock.svg";
import Logout from "../assets/icons/logout.svg";
import MoonOff from "../assets/icons/moon-off.svg";
import Moon from "../assets/icons/moon.svg";
import OgreIcon from "../assets/icons/ogre_icon.svg";
import PlayFilled from "../assets/icons/player-play.svg";
import RedIcon from "../assets/icons/red_icon.svg";
import Robot from "../assets/icons/robot.svg";
import Run from "../assets/icons/run.svg";
import SquareCheck from "../assets/icons/square-check.svg";
import Square from "../assets/icons/square.svg";
import Control from "../assets/icons/stack-push.svg";
import StairsUp from "../assets/icons/stairs-up.svg";
import StarFilled from "../assets/icons/star-filled.svg";
import StarOutline from "../assets/icons/star-outline.svg";
import SunHigh from "../assets/icons/sun-high.svg";
import SunOff from "../assets/icons/sun-off.svg";
import Sun from "../assets/icons/sun.svg";
import SwitchVertical from "../assets/icons/switch-vertical.svg";
import Sword from "../assets/icons/sword.svg";
import Swords from "../assets/icons/swords.svg";

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
  arrowsMove: ArrowsMove,
  augment: Augment,
  batteryFour: BatteryFour,
  book: Book,
  cards: Cards,
  rook: Rook,
  cubeUnfolded: CubeUnfolded,
  deselect: Deselect,
  diamond: Diamond,
  fileBarcode: FileBarcode,
  robot: Robot,
  cart: Cart,
  control: Control,
  sword: Sword,
  swords: Swords,
  circleMinus: CircleMinus,
  circleCheck: CircleCheck,
  garosIcon: GarosIcon,
  krakenIcon: KrakenIcon,
  ogreIcon: OgreIcon,
  redIcon: RedIcon,
  playFilled: PlayFilled,
  logout: Logout,
  cube: Cube,
  fire: Fire,
  air: Air,
  water: Water,
  circleKey: CircleKey,
};

export type IconName = keyof typeof ICON_MAPPING;
