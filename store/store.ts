// stores/AppStore.ts
import { makeAutoObservable } from "mobx";

// Types
import { Facility } from "@/types/facility.types";
import { Tyrant, TyrantArchetype } from "@/types/tyrant.types";

export class AppStore {
  tyrants: Map<string, Tyrant> = new Map();
  facilities: Facility[] = [];
  archetypes: TyrantArchetype[] = [];
  tyrantsSelected: number = 0;

  constructor() {
    makeAutoObservable(this);
    this.tyrants = new Map([
      ["Red", { name: "Red", disabled: false, selected: false }],
      ["Green", { name: "Green", disabled: false, selected: false }],
      ["Blue", { name: "Blue", disabled: false, selected: false }],
      ["Orange", { name: "Orange", disabled: false, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
      ["Unknown", { name: "Unknown", disabled: true, selected: false }],
    ]);
    this.facilities = [
      { icon: "swords", rank: 1, name: "Battle", color: "white" },
      { icon: "robot", rank: 1, name: "Assembly", color: "white" },
      { icon: "cart", rank: 1, name: "Shop", color: "white" },
      { icon: "cubeUnfolded", rank: 1, name: "Aegis AId", color: "white" },
      { icon: "diamond", rank: 1, name: "Relics", color: "white" },
      { icon: "fileBarcode", rank: 1, name: "Cipher", color: "white" },
      { icon: "rook", rank: 1, name: "Rook", color: "white" },
      { icon: "deselect", rank: 1, name: "Invader Vi", color: "white" },
      { icon: "cards", rank: 1, name: "Deck", color: "white" },
      { icon: "book", rank: 1, name: "Comics", color: "white" },
    ];

    this.archetypes = [
      {
        name: "Power",
        icon: "batteryFour",
      },
      {
        name: "Destroy",
        icon: "sword",
      },
      {
        name: "Control",
        icon: "control",
      },
      {
        name: "Move",
        icon: "arrowsMove",
      },
      {
        name: "Augment",
        icon: "augment",
      },
    ];
    this.tyrantsSelected = 0;
  }

  toggleSelectTyrant = (tyrant: string) => {
    const currentTyrant = this.tyrants.get(tyrant) as Tyrant;

    if (currentTyrant.selected) {
      this.tyrantsSelected -= 1;
    } else {
      this.tyrantsSelected += 1;
    }

    this.tyrants.set(tyrant, {
      ...currentTyrant,
      selected: !currentTyrant.selected,
    });

    console.log(this.tyrantsSelected);
  };
}
