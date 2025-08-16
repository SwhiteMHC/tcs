// stores/AppStore.ts
import { makeAutoObservable } from "mobx";

// Types
import { Facility } from "@/types/facility.types";
import {
  Tyrant,
  TYRANT_ARCHETYPE,
  TyrantArchetype,
} from "@/types/tyrant.types";

// Styles
import { NavigationCard } from "@/types/card.types.js";
import { Resource } from "@/types/resources.type.js";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { initialResources } from "./data/resources-data";
const fullConfig = resolveConfig(tailwindConfig);

export class AppStore {
  tyrants: Map<string, Tyrant> = new Map();
  facilities: Facility[] = [];
  archetypes: Map<string, TyrantArchetype> = new Map();
  tyrantsSelected: number = 0;
  tyrantOrder: Map<number, Tyrant> = new Map();
  tyrantList: Tyrant[] = [];
  mainMenuCardDrive: NavigationCard[] = [];
  resources: Resource[] = [];

  constructor() {
    makeAutoObservable(this);
    this.tyrants = new Map([
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
    this.facilities = [
      {
        icon: "swords",
        rank: 1,
        name: "Battle",
        color: "white",
        disabled: false,
      },
      {
        icon: "robot",
        rank: 1,
        name: "Assembly",
        color: "white",
        disabled: false,
      },
      { icon: "cart", rank: 1, name: "Shop", color: "white", disabled: false },
      {
        icon: "cubeUnfolded",
        rank: 1,
        name: "Aegis AId",
        color: "white",
        disabled: false,
      },
      {
        icon: "diamond",
        rank: 1,
        name: "Relics",
        color: "white",
        disabled: false,
      },
      {
        icon: "fileBarcode",
        rank: 1,
        name: "Cipher",
        color: "white",
        disabled: false,
      },
      { icon: "rook", rank: 1, name: "Rook", color: "white", disabled: false },
      {
        icon: "deselect",
        rank: 1,
        name: "Invader Vi",
        color: "white",
        disabled: false,
      },
      { icon: "cards", rank: 1, name: "Deck", color: "white", disabled: false },
      {
        icon: "book",
        rank: 1,
        name: "Comics",
        color: "white",
        disabled: false,
      },
    ];

    this.archetypes = new Map([
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
    this.tyrantsSelected = 0;
    this.tyrantList = [];
    this.mainMenuCardDrive = [];
    this.resources = initialResources;
  }

  alterTyrantCount = (selected: boolean) => {
    if (selected) {
      this.tyrantsSelected += 1;
    } else {
      this.tyrantsSelected -= 1;
    }
  };

  alterArchetypeList = (currentTyrant: Tyrant, selected: boolean) => {
    let archetype = this.archetypes.get(
      currentTyrant.archetypes[0]
    ) as TyrantArchetype;
    archetype.disabled = !selected;
  };

  addTyrantToList = (tyrant: Tyrant) => {
    this.tyrantList.push(tyrant);
  };

  removeTyrantFromList = (tyrant: Tyrant) => {
    this.tyrantList = this.tyrantList.filter((t) => t.name !== tyrant.name);
  };

  toggleSelectTyrant = (tyrant: string) => {
    // Get Tyrant Selected
    const currentTyrant = this.tyrants.get(tyrant) as Tyrant;
    const selected = !currentTyrant.selected;

    // Alter Tyrant Count
    this.alterTyrantCount(selected);

    // Alter Archetypes
    this.alterArchetypeList(currentTyrant, selected);

    // Create Tyrant List
    if (selected) {
      this.addTyrantToList(currentTyrant);
    } else {
      this.removeTyrantFromList(currentTyrant);
    }

    // Set Tyrant Selected
    this.tyrants.set(tyrant, {
      ...currentTyrant,
      selected,
    });
  };
}
