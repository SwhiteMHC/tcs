// React Native
import { useColorScheme } from "nativewind";
import { Text, View } from "react-native";

export default function Footer() {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";
  return (
    <View style={{ flex: 0.5, borderWidth: 2, borderColor: color }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: color }}></Text>
      </View>
    </View>
  );
}
