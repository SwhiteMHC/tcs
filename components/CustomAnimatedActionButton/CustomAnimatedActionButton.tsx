// React
import { Text, TouchableOpacity, View } from "react-native";

// Router

// Components
import CustomAnimatedBaseIconH from "../CustomAnimatedBaseIconH/CustomAnimatedBaseIconH";
import CustomBaseIconH from "../CustomBaseIconH/CustomBaseIconH";

// Types
import { IconName } from "@/types/icons.types";

interface CustomAnimatedActionButtonProps {
  title: string;
  icon: IconName;
  size: number;
  flip: boolean;
  shouldAnimate?: boolean;
  action: () => void;
  color: string;
  value: number;
}

export default function CustomAnimatedActionButton({
  title,
  icon,
  size,
  flip,
  shouldAnimate,
  action,
  color,
  value,
}: CustomAnimatedActionButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => action()}
      activeOpacity={0.7}
      className="w-32 flex flex-col border-2 border-solid border-black dark:border-white p-5 rounded-lg justify-center items-center"
      style={{ borderColor: color }}
    >
      <View>
        {shouldAnimate ? (
          <CustomAnimatedBaseIconH name={icon} size={size} flip={flip} />
        ) : (
          <CustomBaseIconH name={icon} size={size} flip={flip} color={color} />
        )}
      </View>
      <Text className="text-2xl text-black dark:text-white" style={{ color }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
