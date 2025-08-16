// React Native
import { StyleSheet, View } from "react-native";

export default function Overlay() {
  return (
    <View
      style={[StyleSheet.absoluteFill, { position: "absolute", zIndex: -2 }]}
      // if you use NativeWind:
      className="bg-white/50 dark:bg-black"
    />
  );
}
