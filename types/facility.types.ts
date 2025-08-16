import { IconName } from "./icons.types";

export type Facility = {
  icon: IconName;
  rank: number;
  name: string;
  color: string;
  disabled: boolean;
};
