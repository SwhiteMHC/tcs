// Styles
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

// Types
import { Tyrant, TYRANT_ARCHETYPE } from "@/types/tyrant.types";

const fullConfig = resolveConfig(tailwindConfig);

export const initialTyrants: Map<string, Tyrant> = new Map([
  [
    "Red Commander",
    {
      name: "Red Commander",
      disabled: false,
      selected: false,
      archetypes: [TYRANT_ARCHETYPE.POWER],
      color: fullConfig.theme.colors.tyrantRed,
      icon: "batteryFour",
    },
  ],
  [
    "Garos",
    {
      name: "Garos",
      disabled: false,
      selected: false,
      archetypes: [TYRANT_ARCHETYPE.CONTROL],
      color: fullConfig.theme.colors.tyrantGreen,
      icon: "control",
    },
  ],
  [
    "Kraken",
    {
      name: "Kraken",
      disabled: false,
      selected: false,
      archetypes: [TYRANT_ARCHETYPE.MOVE],
      color: fullConfig.theme.colors.tyrantBlue,
      icon: "arrowsMove",
    },
  ],
  [
    "Ogre",
    {
      name: "Ogre",
      disabled: false,
      selected: false,
      archetypes: [TYRANT_ARCHETYPE.AUGMENT],
      color: fullConfig.theme.colors.tyrantOrange,
      icon: "augment",
    },
  ],
  [
    "Unknown",
    {
      name: "Unknown",
      disabled: true,
      selected: false,
      archetypes: [],
      color: "white",
    },
  ],
]);
