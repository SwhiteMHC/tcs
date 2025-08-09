// React Native
import { View } from "react-native";

// Components
import Header from "@/components/Header/Header";
import { ThemeToggle } from "@/components/ThemeToggle";

// Hooks
import { useNavigation } from "expo-router";
import { useEffect } from "react";

// Styles

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-bg-light dark:bg-bg-dark">
      <View className="flex-row justify-between border-2 border-red-900 w-full p-4">
        <View className="flex-row items-center gap-x-2">
          <Header crumbs={["Castle Stiel", "Access Screen"]} />
        </View>
        <ThemeToggle />
      </View>
    </View>
  );
}
