import { IconName } from "./icons.types";

export type Tyrant = {
  name: string;
  disabled: boolean;
  selected: boolean;
  archetypes: string[];
  color: string;
  icon?: IconName;
};

export type TyrantArchetype = {
  name: string;
  icon: IconName;
  disabled: boolean;
};

export enum TYRANT_ARCHETYPE {
  POWER = "Power",
  DESTROY = "Destroy",
  CONTROL = "Control",
  MOVE = "Move",
  AUGMENT = "Augment",
}
