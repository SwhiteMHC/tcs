import { ImageBackground, View } from "react-native";

export default function CustomImageBackground() {
  return (
    <ImageBackground
      source={require("../../assets/bg/tcs_castle_stiel_bg_transparent_2732_2048.png")}
      resizeMode="cover"
      className="flex-1 w-full h-full"
    >
      <View className="flex-1 items-center justify-center"></View>
    </ImageBackground>
  );
}
