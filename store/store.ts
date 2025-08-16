// stores/AppStore.ts
import { makeAutoObservable } from "mobx";

// Types
import { Facility } from "@/types/facility.types";
import {
  Tyrant,
  TYRANT_ARCHETYPE,
  TyrantArchetype,
} from "@/types/tyrant.types";

export class AppStore {
  tyrants: Map<string, Tyrant> = new Map();
  facilities: Facility[] = [];
  archetypes: Map<string, TyrantArchetype> = new Map();
  tyrantsSelected: number = 0;

  constructor() {
    makeAutoObservable(this);
    this.tyrants = new Map([
      [
        "Red",
        {
          name: "Red",
          disabled: false,
          selected: false,
          archetypes: [TYRANT_ARCHETYPE.POWER],
        },
      ],
      [
        "Green",
        {
          name: "Green",
          disabled: false,
          selected: false,
          archetypes: [TYRANT_ARCHETYPE.CONTROL],
        },
      ],
      [
        "Blue",
        {
          name: "Blue",
          disabled: false,
          selected: false,
          archetypes: [TYRANT_ARCHETYPE.MOVE],
        },
      ],
      [
        "Orange",
        {
          name: "Orange",
          disabled: false,
          selected: false,
          archetypes: [TYRANT_ARCHETYPE.AUGMENT],
        },
      ],
      [
        "Unknown",
        { name: "Unknown", disabled: true, selected: false, archetypes: [] },
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
          color: "#ef4444",
        },
      ],
      [
        TYRANT_ARCHETYPE.DESTROY,
        {
          name: "Destroy",
          icon: "sword",
          disabled: true,
          color: "#ef4444",
        },
      ],
      [
        TYRANT_ARCHETYPE.CONTROL,
        {
          name: "Control",
          icon: "control",
          disabled: true,
          color: "#84cc16",
        },
      ],
      [
        TYRANT_ARCHETYPE.MOVE,
        {
          name: "Move",
          icon: "arrowsMove",
          disabled: true,
          color: "#3b82f6",
        },
      ],
      [
        TYRANT_ARCHETYPE.AUGMENT,
        {
          name: "Augment",
          icon: "augment",
          disabled: true,
          color: "#f97316",
        },
      ],
    ]);
    this.tyrantsSelected = 0;
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

  toggleSelectTyrant = (tyrant: string) => {
    // Get Tyrant Selected
    const currentTyrant = this.tyrants.get(tyrant) as Tyrant;
    const selected = !currentTyrant.selected;

    console.log(selected);

    // Alter Tyrant Count
    this.alterTyrantCount(selected);

    // Alter Archetypes
    this.alterArchetypeList(currentTyrant, selected);

    // Set Tyrant Selected
    this.tyrants.set(tyrant, {
      ...currentTyrant,
      selected,
    });
  };
}
