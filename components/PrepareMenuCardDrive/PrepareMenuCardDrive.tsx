// React Native
import { View } from "react-native";

// Types
import { NavigationCard } from "@/types/card.types";

// Styles
import { useColorScheme } from "nativewind";

// Components
import CustomAnimatedNavigationButton from "../CustomAnimatedNavigationButton/CustomAnimatedNavigationButton";

interface PrepareMenuCardDriveProps {
  cardData: NavigationCard[];
}

export default function PrepareMenuCardDrive({
  cardData,
}: PrepareMenuCardDriveProps) {
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
        {cardData.map((card) => (
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
}
