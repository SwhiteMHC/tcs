// React Native
import { useStore } from "@/store/provider";
import { Text, View } from "react-native";
import TyrantNameSelect from "../TyrantNameSelect/TyrantNameSelect";

export default function TyrantSelectColumn() {
  const { tyrants } = useStore();

  return (
    <View
      style={{ flex: 1, flexDirection: "column" }}
      className="border-2 border-solid border-black dark:border-white"
    >
      <View className="flex items-center justify-center h-20">
        <Text className="text-black dark:text-white text-lg text-center">
          Tyrants Aboard:
        </Text>
      </View>
      <View className="gap-y-2">
        {tyrants.map((tyrant, index) => (
          <TyrantNameSelect
            name={tyrant.name}
            key={index}
            disabled={tyrant.disabled}
          />
        ))}
      </View>
    </View>
  );
}
