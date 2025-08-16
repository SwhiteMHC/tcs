// React Native
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

// Components
import CardDrive from "@/components/CardDrive/CardDrive";
import Footer from "@/components/Footer/Footer";
import GameArea from "@/components/GameArea/GameArea";
import Overlay from "@/components/Overlay/Overlay";
import TyrantsOfCastleStiel from "@/components/TitleOverlays/TyrantsOfCastleStiel";
import TopNav from "@/components/TopNav/TopNav";

// Hooks
import { useNavigation } from "expo-router";
import { useEffect } from "react";

// Styles

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <ImageBackground
        source={require("../assets/bg/tcs_castle_stiel_bg_transparent_2732_2048.png")}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, { position: "absolute", zIndex: -1 }]}
      />
      <Overlay />
      <View style={{ flex: 1, flexDirection: "column" }}>
        <TopNav crumbs={["Castle Stiel", "Title Screen"]} />
        <GameArea>
          <TyrantsOfCastleStiel />
        </GameArea>
        <CardDrive />
        <Footer />
      </View>
    </SafeAreaView>
  );
}
