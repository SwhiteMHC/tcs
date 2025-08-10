// React Native
import { Text, View } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";

interface TyrantNameSelectProps {
  name: string;
  disabled: boolean;
}

export default function TyrantNameSelect({
  name,
  disabled,
}: TyrantNameSelectProps) {
  return (
    <View className="flex flex-row justify-between items-center border-2 border-solid dark:border-white border-black p-2">
      <CustomIcon name="square" />
      <Text className="text-black dark:text-white text-lg">{name}</Text>
      <CustomIcon name={disabled ? "lock" : "lockOpen"} />
    </View>
  );
}
