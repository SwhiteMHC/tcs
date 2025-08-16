// React Native
import { IconName } from "@/types/icons.types";
import { Text, View } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";
import FilledStar from "../FilledStar/FilledStar";
import OutlinedStar from "../OutlinedStar/OutlinedStar";

// Components
interface FacilityStatusProps {
  icon: IconName;
  rank: number;
  name: string;
  color: string;
  size?: number;
}

export default function FacilityStatus({
  icon,
  rank,
  name,
  color,
  size = 75,
}: FacilityStatusProps) {
  const MAX_RANK = 5;
  const UNFILLED_STARS = MAX_RANK - rank;

  return (
    <View className="flex flex-1 justify-center items-center border-2 border-solid border-black dark:border-white rounded-md p-3">
      <Text className="text-black dark:text-white text-lg text-center">
        {name}
      </Text>
      <CustomIcon name={icon} width={size} height={size} strokeWidth={1} />
      <View className="flex flex-row justify-center items-center">
        {Array.from({ length: rank }, (_, i) => (
          <FilledStar key={i} color={color} size={24} />
        ))}
        {Array.from({ length: UNFILLED_STARS }, (_, i) => (
          <OutlinedStar key={i} color={color} size={24} />
        ))}
      </View>
    </View>
  );
}
