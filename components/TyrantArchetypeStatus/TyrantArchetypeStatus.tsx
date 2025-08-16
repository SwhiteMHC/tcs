// React Native
import { IconName } from "@/types/icons.types";
import { observer } from "mobx-react-lite";
import { Text, View } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";
import DynamicFlexFiller from "../DynamicFlexFiller/DynamicFlexFiller";

// Components
interface TyrantArchetypeStatusProps {
  icon: IconName;
  name: string;
  color: string;
  disabled: boolean;
  size?: number;
}

export default observer(function TyrantArchetypeStatus({
  icon,
  name,
  color,
  disabled,
  size = 75,
}: TyrantArchetypeStatusProps) {
  return (
    <View className="flex flex-1 justify-center items-center border-2 border-solid border-black dark:border-white rounded-md">
      <View className="flex flex-row items-center justify-between w-full">
        <DynamicFlexFiller size={1} />
        <Text
          style={{ flex: 2 }}
          className="text-black dark:text-white text-lg text-center"
        >
          {name}
        </Text>

        <CustomIcon
          name={disabled ? "circleMinus" : "circleCheck"}
          width={32}
          color={disabled ? "#64748b" : color}
        />
      </View>
      <CustomIcon
        name={icon}
        width={size}
        height={size}
        strokeWidth={1}
        stroke={disabled ? "#64748b" : color}
      />
    </View>
  );
});
