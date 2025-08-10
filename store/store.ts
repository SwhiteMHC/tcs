// stores/AppStore.ts
import { makeAutoObservable } from "mobx";

// Types
import { Facility } from "@/types/facility.types";
import { Tyrant, TyrantArchetype } from "@/types/tyrant.types";

export class AppStore {
  tyrants: Tyrant[] = [];
  facilities: Facility[] = [];
  archetypes: TyrantArchetype[] = [];

  constructor() {
    makeAutoObservable(this);
    this.tyrants = [
      { name: "Red", disabled: false },
      { name: "Green", disabled: false },
      { name: "Blue", disabled: false },
      { name: "Orange", disabled: false },
      { name: "Unknown", disabled: true },
      { name: "Unknown", disabled: true },
      { name: "Unknown", disabled: true },
      { name: "Unknown", disabled: true },
      { name: "Unknown", disabled: true },
      { name: "Unknown", disabled: true },
      { name: "Unknown", disabled: true },
      { name: "Unknown", disabled: true },
    ];
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
  }
}
