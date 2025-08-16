// React Native
import { View } from "react-native";

// Styles
import { useColorScheme } from "nativewind";

interface GameAreaProps {
  children: React.ReactNode;
}
export default function GameArea({ children }: GameAreaProps) {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";
  return (
    <View style={{ flex: 12, borderWidth: 2, borderColor: color }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
}
