import { useColorScheme } from "nativewind";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Chip: React.FC<{
  label: string;
  active: boolean;
  onPress: () => void;
}> = ({ label, active, onPress }) => (
  <Pressable
    onPress={onPress}
    className={`px-3 py-2 rounded-full border ${
      active
        ? "bg-black/10 dark:bg-white/10 border-black/20 dark:border-white/20"
        : "border-black/10 dark:border-white/10"
    }`}
  >
    <Text className="text-black dark:text-white">{label}</Text>
  </Pressable>
);

export const ThemeToggle: React.FC = () => {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center gap-2">
      <Chip
        label="Light"
        active={colorScheme === "light"}
        onPress={() => setColorScheme("light")}
      />
      <Chip
        label="Dark"
        active={colorScheme === "dark"}
        onPress={() => setColorScheme("dark")}
      />
    </View>
  );
};
