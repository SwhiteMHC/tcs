import { NavigationCard, TyrantFloorCard } from "@/types/card.types";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export const mainMenuCardDrive: NavigationCard[] = [
  {
    title: "Log Out",
    icon: "logout",
    size: 32,
    flip: true,
    shouldAnimate: false,
    destination: "/",
  },
  {
    title: "Enter",
    icon: "run",
    size: 32,
    flip: false,
    shouldAnimate: false,
    destination: "/prepare",
  },
];

export const prepareMenuCardDrive: NavigationCard[] = [
  {
    title: "Exit",
    icon: "run",
    size: 32,
    flip: true,
    shouldAnimate: false,
    destination: "/",
  },
  {
    title: "Ascend",
    icon: "playFilled",
    size: 32,
    flip: false,
    shouldAnimate: false,
    destination: "/debug",
  },
];

export const tyrantFloorCardDrive: TyrantFloorCard[] = [
  {
    title: "White",
    icon: "circleKey",
    size: 32,
    flip: true,
    shouldAnimate: false,
    action: () => console.log("Hello"),
    value: 0,
    color: fullConfig.theme.colors.myWhite,
  },
  {
    title: "Bronze",
    icon: "circleKey",
    size: 32,
    flip: false,
    shouldAnimate: false,
    action: () => console.log("Hello"),
    value: 0,
    color: fullConfig.theme.colors.myBronze,
  },
  {
    title: "Silver",
    icon: "circleKey",
    size: 32,
    flip: false,
    shouldAnimate: false,
    action: () => console.log("Hello"),
    value: 0,
    color: fullConfig.theme.colors.mySilver,
  },
  {
    title: "Gold",
    icon: "circleKey",
    size: 32,
    flip: false,
    shouldAnimate: false,
    action: () => console.log("Hello"),
    value: 0,
    color: fullConfig.theme.colors.myGold,
  },
];
