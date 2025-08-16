// React Native
import { View } from "react-native";

// Components

// Store
import { useStore } from "@/store/provider";
import { observer } from "mobx-react-lite";

// Styles
import { useColorScheme } from "nativewind";
import CustomAnimatedActionButton from "../CustomAnimatedActionButton/CustomAnimatedActionButton";

export default observer(function TyrantFloorCardDrive() {
  const { tyrantFloorCardDrive } = useStore();
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";

  return (
    <View
      style={{
        flex: 2,
        borderWidth: 2,
        alignSelf: "stretch",
        borderColor: color,
      }}
    >
      <View className="flex flex-1 flex-row justify-end items-center gap-x-2 p-2">
        {tyrantFloorCardDrive.map((card) => (
          <CustomAnimatedActionButton
            key={card.title}
            title={card.title}
            icon={card.icon}
            size={card.size}
            flip={card.flip}
            shouldAnimate={card.shouldAnimate}
            action={card.action}
            color={card.color}
            value={card.value}
          />
        ))}
      </View>
    </View>
  );
});
