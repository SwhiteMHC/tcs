// React Native
import { Text, View } from "react-native";

// Styles
import { useColorScheme } from "nativewind";

export default function Footer() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";
  return (
    <View
      style={{
        flex: 0.5,
        padding: 16,
        borderWidth: 2,
        borderColor: color,
      }}
      className="flex flex-row items-center justify-between"
    >
      <Text style={{ color: color }}></Text>
    </View>
  );
}
