// React Native
import { IconName } from "@/types/icons.types";
import { Text, View } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";

// Components
interface TyrantArchetypeStatusProps {
  icon: IconName;
  rank: number;
  name: string;
  color: string;
  size?: number;
}

export default function TyrantArchetypeStatus({
  icon,
  rank,
  name,
  color,
  size = 75,
}: TyrantArchetypeStatusProps) {
  const MAX_RANK = 5;
  const UNFILLED_STARS = MAX_RANK - rank;

  return (
    <View className="flex flex-1 justify-center items-center border-2 border-solid border-black dark:border-white rounded-md">
      <Text className="text-black dark:text-white text-lg text-center">
        {name}
      </Text>
      <CustomIcon name={icon} width={size} height={size} strokeWidth={1} />
    </View>
  );
}
