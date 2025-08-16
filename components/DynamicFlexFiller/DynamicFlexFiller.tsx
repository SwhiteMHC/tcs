import { View } from "react-native";

interface DynamicFlexFillerProps {
  size: number;
}

export default function DynamicFlexFiller({ size }: DynamicFlexFillerProps) {
  return <View className="flex" style={{ flex: size }}></View>;
}
