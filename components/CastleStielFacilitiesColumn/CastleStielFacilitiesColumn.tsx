// React Native
import { Text, View } from "react-native";

// Styles
import { useColorScheme } from "nativewind";

// Store
import { observer } from "mobx-react-lite";

// Components
import FacilityStatus from "../FacilityStatus/FacilityStatus";

// Hooks
import { useStore } from "@/store/provider";
import TyrantArchetypeStatus from "../TyrantArchetypeStatus/TyrantArchetypeStatus";

export default observer(function CastleStielFacilitiesColumn() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";
  const { facilities, archetypes } = useStore();

  return (
    <View
      style={{ flex: 2, flexDirection: "column" }}
      className="flex flex-2 border-2 border-solid "
    >
      <View className="flex items-center justify-center h-20 border-solid border-2 border-black dark:border-white">
        <Text className="text-black dark:text-white text-lg text-center">
          Castle Stiel Status:
        </Text>
      </View>

      <View className="flex flex-1 justify-start gap-y-10">
        <View>
          <Text className="text-black dark:text-white text-lg text-start">
            Facilities:
          </Text>
          <View className="flex flex-row">
            {facilities.slice(0, 5).map((facility) => (
              <FacilityStatus
                key={facility.name}
                icon={facility.icon}
                rank={facility.rank}
                name={facility.name}
                color={color}
              />
            ))}
          </View>
          <View className="flex flex-row">
            {facilities.slice(5, 10).map((facility) => (
              <FacilityStatus
                key={facility.name}
                icon={facility.icon}
                rank={facility.rank}
                name={facility.name}
                color={color}
              />
            ))}
          </View>
        </View>

        <View>
          <Text className="text-black dark:text-white text-lg text-start">
            Tyrant Archetypes:
          </Text>
          <View className="flex flex-row">
            {Array.from(archetypes.values()).map((archetype) => (
              <TyrantArchetypeStatus
                key={archetype.name}
                icon={archetype.icon}
                name={archetype.name}
                color={archetype.color}
                disabled={archetype.disabled}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
});
