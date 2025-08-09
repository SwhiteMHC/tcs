import { useColorScheme } from "nativewind";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import CustomIcon from "./CustomIcon/CustomIcon";

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
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center gap-2">
      <TouchableOpacity
        className="border-2 border-black border-solid dark:border-white rounded-xl p-2"
        onPress={() =>
          setColorScheme(colorScheme === "dark" ? "light" : "dark")
        }
      >
        <CustomIcon name={colorScheme === "dark" ? "moon" : "moonOff"} />
      </TouchableOpacity>
    </View>
  );
};
