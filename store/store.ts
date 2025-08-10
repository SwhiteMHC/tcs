// stores/AppStore.ts
import { makeAutoObservable } from "mobx";

// Types
import { Tyrant } from "@/types/tyrant.types";

export class AppStore {
  tyrants: Tyrant[] = [];

  constructor() {
    makeAutoObservable(this);
    this.tyrants = [
      { name: "Red" },
      { name: "Green" },
      { name: "Blue" },
      { name: "Orange" },
      { name: "Unknown" },
      { name: "Unknown" },
      { name: "Unknown" },
      { name: "Unknown" },
      { name: "Unknown" },
      { name: "Unknown" },
      { name: "Unknown" },
    ];
  }
}
