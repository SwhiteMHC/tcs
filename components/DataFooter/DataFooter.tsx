// React Native
import { View } from "react-native";

// Styles
import { observer } from "mobx-react-lite";
import { useColorScheme } from "nativewind";

// Store
import { useStore } from "@/store/provider";
import ResourceStatus from "../ResourceStatus/ResourceStatus";

export default observer(function DataFooter() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";
  const { resources } = useStore();

  return (
    <View style={{ flex: 0.5, borderWidth: 2, borderColor: color }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View className="flex flex-row flex-start gap-x-5 justify-start w-full p-2">
          {resources.map((resource) => (
            <ResourceStatus
              key={resource.name}
              name={resource.name}
              value={resource.value}
              icon={resource.icon}
            />
          ))}
        </View>
      </View>
    </View>
  );
});
