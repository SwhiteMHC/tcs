// React Native
import { useColorScheme } from "nativewind";
import { View } from "react-native";

// Components
import CustomAnimatedNavigationButton from "../CustomAnimatedNavigationButton/CustomAnimatedNavigationButton";

export default function CardDrive() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";

  return (
    <View
      style={{
        flex: 2,
        borderWidth: 2,
        borderColor: color,
        alignSelf: "stretch",
      }}
    >
      <View className="flex flex-1 flex-row justify-end items-center gap-x-2 p-2">
        <CustomAnimatedNavigationButton
          title="Exit"
          icon={"run"}
          size={32}
          flip={true}
          shouldAnimate={false}
          destination="/"
        />
        <CustomAnimatedNavigationButton
          title="Enter"
          icon={"run"}
          size={32}
          flip={false}
          shouldAnimate={false}
          destination="/prepare"
        />
      </View>
    </View>
  );
}
