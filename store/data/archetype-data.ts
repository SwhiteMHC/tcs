// Types
import { TYRANT_ARCHETYPE, TyrantArchetype } from "@/types/tyrant.types";

// Styles
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export const initialArchetypes: Map<string, TyrantArchetype> = new Map([
  [
    TYRANT_ARCHETYPE.POWER,
    {
      name: "Power",
      icon: "batteryFour",
      disabled: true,
      color: fullConfig.theme.colors.tyrantRed,
    },
  ],
  [
    TYRANT_ARCHETYPE.DESTROY,
    {
      name: "Destroy",
      icon: "sword",
      disabled: true,
      color: fullConfig.theme.colors.tyrantRed,
    },
  ],
  [
    TYRANT_ARCHETYPE.CONTROL,
    {
      name: "Control",
      icon: "control",
      disabled: true,
      color: fullConfig.theme.colors.tyrantGreen,
    },
  ],
  [
    TYRANT_ARCHETYPE.MOVE,
    {
      name: "Move",
      icon: "arrowsMove",
      disabled: true,
      color: fullConfig.theme.colors.tyrantBlue,
    },
  ],
  [
    TYRANT_ARCHETYPE.AUGMENT,
    {
      name: "Augment",
      icon: "augment",
      disabled: true,
      color: fullConfig.theme.colors.tyrantOrange,
    },
  ],
]);
