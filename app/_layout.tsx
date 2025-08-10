import { Stack } from "expo-router";
import "../global.css";
import { StoreProvider } from "../store/provider";

export default function Layout() {
  return (
    <StoreProvider>
      <Stack>
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="prepare" options={{ headerShown: false }} />
      </Stack>
    </StoreProvider>
  );
}
