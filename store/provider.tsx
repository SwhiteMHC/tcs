// stores/StoreProvider.tsx
import React, {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { AppStore, type AppStoreInit } from "./store";

const StoreContext = createContext<AppStore | null>(null);

export function StoreProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: AppStoreInit;
}) {
  // Ensure a single store instance for the tree
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = new AppStore(initialState);
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore() must be used within a <StoreProvider />");
  }
  return store;
}
