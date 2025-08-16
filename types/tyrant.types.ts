import { IconName } from "./icons.types";

export type Tyrant = {
  name: string;
  disabled: boolean;
  selected: boolean;
};

export type TyrantArchetype = {
  name: string;
  icon: IconName;
};
