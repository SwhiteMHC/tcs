import { IconName } from "./icons.types";

export type NavigationCard = {
  title: string;
  icon: IconName;
  size: number;
  flip: boolean;
  shouldAnimate: boolean;
  destination: string;
};

export type TyrantFloorCard = {
  title: string;
  icon: IconName;
  size: number;
  flip: boolean;
  shouldAnimate: boolean;
  action: () => void;
  value: number;
  color: string;
};
