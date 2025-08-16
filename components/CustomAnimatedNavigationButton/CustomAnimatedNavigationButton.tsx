// React
import { Text, TouchableOpacity, View } from "react-native";

// Router
import { RelativePathString, useRouter } from "expo-router";

// Components
import CustomAnimatedBaseIconH from "../CustomAnimatedBaseIconH/CustomAnimatedBaseIconH";
import CustomBaseIconH from "../CustomBaseIconH/CustomBaseIconH";

// Types
import { IconName } from "@/types/icons.types";

interface CustomAnimatedNavigationButtonProps {
  title: string;
  icon: IconName;
  size: number;
  flip: boolean;
  shouldAnimate?: boolean;
  destination: string;
}

export default function CustomAnimatedNavigationButton({
  title,
  icon,
  size,
  flip,
  shouldAnimate,
  destination,
}: CustomAnimatedNavigationButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(destination as RelativePathString);
      }}
      activeOpacity={0.7}
      className="w-32 flex flex-col border-2 border-solid border-black dark:border-white p-5 rounded-lg justify-center items-center"
    >
      <View>
        {shouldAnimate ? (
          <CustomAnimatedBaseIconH name={icon} size={size} flip={flip} />
        ) : (
          <CustomBaseIconH name={icon} size={size} flip={flip} />
        )}
      </View>
      <Text className="text-2xl text-black dark:text-white">{title}</Text>
    </TouchableOpacity>
  );
}
