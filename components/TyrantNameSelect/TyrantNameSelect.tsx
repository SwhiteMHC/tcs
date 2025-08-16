// React Native
import { useStore } from "@/store/provider";
import { observer } from "mobx-react-lite";
import { Text, TouchableOpacity, View } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";

interface TyrantNameSelectProps {
  name: string;
  disabled: boolean;
  selected: boolean;
}

export default observer(function TyrantNameSelect({
  name,
  disabled,
  selected,
}: TyrantNameSelectProps) {
  const { toggleSelectTyrant, tyrantsSelected } = useStore();

  return (
    <TouchableOpacity
      disabled={tyrantsSelected === 3 && !selected}
      onPress={() => toggleSelectTyrant(name)}
    >
      <View className="flex flex-row justify-between items-center border-2 border-solid dark:border-white border-black p-2">
        {selected ? (
          <CustomIcon name="squareCheck" />
        ) : (
          <CustomIcon name="square" />
        )}
        <Text className="text-black dark:text-white text-lg">{name}</Text>
        <CustomIcon name={disabled ? "lock" : "lockOpen"} />
      </View>
    </TouchableOpacity>
  );
});
