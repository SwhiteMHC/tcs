import { NavigationCard } from "@/types/card.types";

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
