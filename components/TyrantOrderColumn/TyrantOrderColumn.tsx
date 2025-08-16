// React Native
import { useStore } from "@/store/provider";
import { ICON_MAPPING } from "@/types/icons.types";
import { Tyrant } from "@/types/tyrant.types";
import { observer } from "mobx-react-lite";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { Text, View } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";
import FilledStar from "../FilledStar/FilledStar";
import OutlinedStar from "../OutlinedStar/OutlinedStar";

interface TyrantOrderPositionProps {
  color: string;
  rank: number;
  icon?: keyof typeof ICON_MAPPING;
}

function TyrantOrderPosition({
  color,
  rank,
  icon = "lineScan",
}: TyrantOrderPositionProps) {
  const MAX_RANK = 3;
  const FILLED = new Array(rank).fill(0);
  const EMPTY = new Array(MAX_RANK - rank).fill(0);

  return (
    <View
      style={{ flex: 1 }}
      className="flex flex-1 border-2 border-solid border-black dark:border-white"
    >
      <View className="flex flex-row items-center justify-end">
        <CustomIcon name="switchVertical" width={32} height={32} />
      </View>
      <View className="flex flex-row justify-center">
        <CustomIcon
          name={icon}
          width={132}
          height={132}
          strokeWidth={1}
          stroke={color}
        />
      </View>
      <View className="flex flex-row justify-center">
        {FILLED.map((_, index) => (
          <FilledStar key={index} color={color} size={48} />
        ))}
        {EMPTY.map((_, index) => (
          <OutlinedStar key={index} color={color} size={48} />
        ))}
      </View>
    </View>
  );
}

export default observer(function TyrantOrderColumn() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";
  const { tyrantList, tyrantsSelected } = useStore();
  const [finalTyrantOrder, setFinalTyrantOrder] = useState<Tyrant[]>([]);
  const maxTyrants = 3;
  const emptyFields = new Array(maxTyrants - tyrantsSelected).fill(0);

  console.log(tyrantList);

  return (
    <View
      style={{ flex: 1, flexDirection: "column" }}
      className="flex flex-1 border-2 border-solid border-black dark:border-white"
    >
      <View className="flex items-center justify-center h-20">
        <Text className="text-black dark:text-white text-lg text-center">
          Tyrant Order:
        </Text>
      </View>

      {emptyFields.map((_, index) => (
        <TyrantOrderPosition key={index} color={color} rank={0} />
      ))}

      {tyrantList.map((tyrant, index) => (
        <TyrantOrderPosition
          key={index}
          rank={index === 0 ? 3 : index === 1 ? 2 : 1}
          color={tyrant.color}
          icon={tyrant.icon}
        />
      ))}
    </View>
  );
});
