// React Native
import { useStore } from "@/store/provider";
import { observer } from "mobx-react-lite";
import { Text, View } from "react-native";
import TyrantNameSelect from "../TyrantNameSelect/TyrantNameSelect";

export default observer(function TyrantSelectColumn() {
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
        {Array.from(tyrants.values()).map((tyrant, index) => (
          <TyrantNameSelect
            name={tyrant.name}
            key={index}
            disabled={tyrant.disabled}
            selected={tyrant.selected}
          />
        ))}
      </View>
    </View>
  );
});
