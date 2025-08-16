// React Native
import { View } from "react-native";

// Styles
import { useColorScheme } from "nativewind";

// Components
import Header from "../Header/Header";
import { ThemeToggle } from "../ThemeToggle";

interface TopNavProps {
  crumbs: string[];
}
export default function TopNav({ crumbs }: TopNavProps) {
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
      <Header crumbs={crumbs} />
      <View>
        <ThemeToggle />
      </View>
    </View>
  );
}
