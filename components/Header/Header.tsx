// React Native
import { Text, View } from "react-native";

interface HeaderProps {
  crumbs: string[];
}

export default function Header({ crumbs }: HeaderProps) {
  return (
    <View className="flex-row items-center">
      {crumbs.map((crumb, index) => (
        <View key={index} className="flex-row items-center">
          <Text className="text-text-light dark:text-text-dark text-2xl">
            {crumb}
          </Text>
          {index < crumbs.length - 1 && (
            <Text className="mx-2 text-text-light dark:text-text-dark text-2xl">
              {" » "}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
}
