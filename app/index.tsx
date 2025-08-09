// React Native
import { Text, View } from "react-native";

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
    <View className="flex-1 bg-bg-light dark:bg-bg-dark">
      {/* Column container: let children STRETCH, not center */}
      <View className="flex-1 flex-col">
        {/* Header */}
        <View
          style={{ flex: 0.5 }}
          className="self-stretch border-2 border-red-900 p-4"
        >
          {/* Row: allow left/right to shrink within the row */}
          <View className="flex-row items-center justify-between">
            {/* Left side can grow/shrink; min-w-0 is the key to prevent overflow */}
            <View className="flex-1 min-w-0">
              <Header crumbs={["Castle Stiel", "Access Screen"]} />
            </View>
            {/* Right side toggle; prevent it from stretching the row */}
            <View className="shrink-0">
              <ThemeToggle />
            </View>
          </View>
        </View>

        {/* Main */}
        <View
          style={{ flex: 7 }}
          className="self-stretch border-2 border-red-700"
        >
          <View className="flex-1 items-center justify-center">
            <Text className="text-text-light dark:text-text-dark text-2xl">
              Main Play Area
            </Text>
          </View>
        </View>

        {/* Control Bar */}
        <View
          style={{ flex: 2 }}
          className="self-stretch border-2 border-red-700"
        >
          <View className="flex-1 items-center justify-center">
            <Text className="text-text-light dark:text-text-dark text-2xl">
              Card Drive
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View
          style={{ flex: 0.5 }}
          className="self-stretch border-2 border-red-700"
        >
          <View className="flex-1 items-center justify-center">
            <Text className="text-text-light dark:text-text-dark">FOOTER</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
