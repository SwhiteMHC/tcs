import { Text, View } from "react-native";

// Components
import CustomAnimatedBaseIconH, {
  AnimatedIconName,
} from "../CustomAnimatedBaseIconH/CustomAnimatedBaseIconH";
import CustomBaseIconH from "../CustomBaseIconH/CustomBaseIconH";

interface CustomAnimatedNavigationButtonProps {
  title: string;
  icon: AnimatedIconName;
  size: number;
  flip: boolean;
  shouldAnimate?: boolean;
}

export default function CustomAnimatedNavigationButton({
  title,
  icon,
  size,
  flip,
  shouldAnimate,
}: CustomAnimatedNavigationButtonProps) {
  return (
    <View className="flex flex-col border-2 border-solid border-black dark:border-white p-5 rounded-lg justify-center items-center">
      <View>
        {shouldAnimate ? (
          <CustomAnimatedBaseIconH name={icon} size={size} flip={flip} />
        ) : (
          <CustomBaseIconH name={icon} size={size} flip={flip} />
        )}
      </View>
      <Text className="text-2xl text-black dark:text-white">{title}</Text>
    </View>
  );
}
