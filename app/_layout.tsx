import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import "../global.css";

export default function Layout() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Stack>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="prepare" options={{ headerShown: false }} />
    </Stack>
  );
}
