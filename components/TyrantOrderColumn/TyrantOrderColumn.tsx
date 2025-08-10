// React Native
import { useColorScheme } from "nativewind";
import { Text, View } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";

interface FilledStarProps {
  color: string;
  size: number;
}

function FilledStar({ color, size }: FilledStarProps) {
  return (
    <CustomIcon
      name="starOutline"
      width={size}
      height={size}
      strokeWidth={1}
      stroke={color}
      fill={color}
    />
  );
}

function OutlinedStar({ color, size }: FilledStarProps) {
  return (
    <CustomIcon
      name="starOutline"
      width={size}
      height={size}
      strokeWidth={1}
      stroke={color}
    />
  );
}

export default function TyrantOrderColumn() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";

  return (
    <View
      style={{ flex: 1, flexDirection: "column" }}
      className="flex flex-1 border-2 border-solid border-black"
    >
      <View className="flex items-center justify-center h-20">
        <Text className="text-black dark:text-white text-lg text-center">
          Tyrant Order:
        </Text>
      </View>
      <View
        style={{ flex: 1 }}
        className="flex flex-1 border-2 border-solid border-black dark:border-white"
      >
        <View className="flex flex-row items-center justify-end">
          <CustomIcon name="switchVertical" width={32} height={32} />
        </View>

        <View className="flex flex-row justify-center">
          <CustomIcon
            name="lineScan"
            width={132}
            height={132}
            strokeWidth={1}
          />
        </View>
        <View className="flex flex-row justify-center">
          <FilledStar color={color} size={48} />
          <FilledStar color={color} size={48} />
          <FilledStar color={color} size={48} />
        </View>
      </View>
      <View
        style={{ flex: 1 }}
        className="flex flex-1 border-2 border-solid border-black dark:border-white"
      >
        <View className="flex flex-row items-center justify-end">
          <CustomIcon name="switchVertical" width={32} height={32} />
        </View>
        <View className="flex flex-row justify-center">
          <CustomIcon
            name="lineScan"
            width={132}
            height={132}
            strokeWidth={1}
          />
        </View>
        <View className="flex flex-row justify-center">
          <FilledStar color={color} size={48} />
          <FilledStar color={color} size={48} />
          <OutlinedStar color={color} size={48} />
        </View>
      </View>
      <View
        style={{ flex: 1 }}
        className="flex flex-1 border-2 border-solid border-black dark:border-white"
      >
        <View className="flex flex-row items-center justify-end">
          <CustomIcon name="switchVertical" width={32} height={32} />
        </View>
        <View className="flex flex-row justify-center">
          <CustomIcon
            name="lineScan"
            width={132}
            height={132}
            strokeWidth={1}
          />
        </View>
        <View className="flex flex-row justify-center">
          <FilledStar color={color} size={48} />
          <OutlinedStar color={color} size={48} />
          <OutlinedStar color={color} size={48} />
        </View>
      </View>
    </View>
  );
}
