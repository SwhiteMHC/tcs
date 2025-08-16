// React Native
import { SafeAreaView, View } from "react-native";

// Components
import GameArea from "@/components/GameArea/GameArea";
import Overlay from "@/components/Overlay/Overlay";
import TyrantsOfCastleStiel from "@/components/TitleOverlays/TyrantsOfCastleStiel";
import TopNav from "@/components/TopNav/TopNav";

// Hooks
import DataFooter from "@/components/DataFooter/DataFooter";
import MainMenuCardDrive from "@/components/MainMenuCardDrive/MainMenuCardDrive";
import { mainMenuCardDrive } from "@/store/data/card-data";
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
      {/* <ImageBackground
        source={require("../assets/bg/tcs_castle_stiel_bg_transparent_2732_2048.png")}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, { position: "absolute", zIndex: -1 }]}
      /> */}
      <Overlay />
      <View style={{ flex: 1, flexDirection: "column" }}>
        <TopNav crumbs={["Castle Stiel", "Tyrant: TBD", "Floor: TBD"]} />
        <GameArea>
          <TyrantsOfCastleStiel />
        </GameArea>
        <MainMenuCardDrive cardData={mainMenuCardDrive} />
        {/* <Footer /> */}
        <DataFooter />
      </View>
    </SafeAreaView>
  );
}
