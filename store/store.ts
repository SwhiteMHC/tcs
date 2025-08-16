// stores/AppStore.ts
import { makeAutoObservable } from "mobx";

// Types
import { Facility } from "@/types/facility.types";
import { Tyrant, TyrantArchetype } from "@/types/tyrant.types";

// Data
import {
  mainMenuCardDrive,
  prepareMenuCardDrive,
  tyrantFloorCardDrive,
} from "./data/card-data";
import { initialResources } from "./data/resources-data";

// Styles
import { NavigationCard, TyrantFloorCard } from "@/types/card.types.js";
import { Resource } from "@/types/resources.type.js";
import { initialArchetypes } from "./data/archetype-data";
import { initialFacilities } from "./data/facility-data";
import { initialTyrants } from "./data/tyrant-data";

export class AppStore {
  tyrants: Map<string, Tyrant> = new Map();
  facilities: Facility[] = [];
  archetypes: Map<string, TyrantArchetype> = new Map();
  tyrantsSelected: number = 0;
  tyrantOrder: Map<number, Tyrant> = new Map();
  tyrantList: Tyrant[] = [];
  mainMenuCardDrive: NavigationCard[] = [];
  prepareMenuCardDrive: NavigationCard[] = [];
  tyrantFloorCardDrive: TyrantFloorCard[] = [];
  resources: Resource[] = [];

  constructor() {
    makeAutoObservable(this);
    this.tyrants = initialTyrants;
    this.facilities = initialFacilities;
    this.archetypes = initialArchetypes;
    this.tyrantsSelected = 0;
    this.tyrantList = [];
    this.mainMenuCardDrive = mainMenuCardDrive;
    this.prepareMenuCardDrive = prepareMenuCardDrive;
    this.tyrantFloorCardDrive = tyrantFloorCardDrive;
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
