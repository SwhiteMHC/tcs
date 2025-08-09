// React Native
import { Text, View } from "react-native";

interface HeaderProps {
  crumbs: string[];
}

export default function Header({ crumbs }: HeaderProps) {
  return (
    <View className="flex flex-1 w-full flex-row items-center">
      {crumbs.map((crumb, index) => (
        <Text
          key={index}
          className="text-text-light dark:text-text-dark text-xl"
        >
          {crumb}
          {index < crumbs.length - 1 && " » "}
        </Text>
      ))}
    </View>
  );
}
