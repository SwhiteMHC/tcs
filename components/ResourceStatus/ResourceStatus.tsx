// React Native
import { Text, View } from "react-native";

// Styles
import { IconName } from "@/types/icons.types";
import { useColorScheme } from "nativewind";
import CustomIcon from "../CustomIcon/CustomIcon";

function formatNumber(value: number) {
  return String(value).padStart(3, "0");
}

interface ResourceStatusProps {
  name: string;
  icon: IconName;
  value: number;
}
export default function ResourceStatus({
  name,
  icon,
  value,
}: ResourceStatusProps) {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";

  return (
    <View className="flex flex-row items-center gap-x-2">
      <CustomIcon name={icon} color={color} />
      <Text className="text-text-light dark:text-text-dark text-xl">
        :{formatNumber(value)}
      </Text>
    </View>
  );
}
