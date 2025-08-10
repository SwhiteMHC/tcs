// stores/AppStore.ts
import { makeAutoObservable } from "mobx";

// Types
import { Tyrant } from "@/types/tyrant.types";

export class AppStore {
  tyrants: Tyrant[] = [];

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
  }
}
