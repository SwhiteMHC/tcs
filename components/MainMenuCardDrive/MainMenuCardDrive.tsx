// React Native
import { View } from "react-native";

// Components
import CustomAnimatedNavigationButton from "../CustomAnimatedNavigationButton/CustomAnimatedNavigationButton";

// Store
import { useStore } from "@/store/provider";
import { observer } from "mobx-react-lite";

// Styles
import { useColorScheme } from "nativewind";

export default observer(function MainMenuCardDrive() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";
  const { mainMenuCardDrive } = useStore();

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
        {mainMenuCardDrive.map((card) => (
          <CustomAnimatedNavigationButton
            key={card.title}
            title={card.title}
            icon={card.icon}
            size={card.size}
            flip={card.flip}
            shouldAnimate={card.shouldAnimate}
            destination={card.destination}
          />
        ))}
      </View>
    </View>
  );
});
