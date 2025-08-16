// React Native
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

// Components
import Overlay from "@/components/Overlay/Overlay";
import TopNav from "@/components/TopNav/TopNav";

// Hooks
import { useNavigation } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

// Styles

// Store
import CardDrive from "@/components/CardDrive/CardDrive";
import CastleStielFacilitiesColumn from "@/components/CastleStielFacilitiesColumn/CastleStielFacilitiesColumn";
import Footer from "@/components/Footer/Footer";
import TyrantOrderColumn from "@/components/TyrantOrderColumn/TyrantOrderColumn";
import TyrantSelectColumn from "@/components/TyrantSelectColumn/TyrantSelectColumn";
import { observer } from "mobx-react-lite";

export default observer(function Prepare() {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();
  const color = colorScheme === "dark" ? "white" : "black";

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <ImageBackground
        source={require("../assets/bg/tcs_castle_stiel_right_half_bg_transparent_2732_2048.png")}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, { position: "absolute", zIndex: -1 }]}
      />
      <Overlay />
      <View style={{ flex: 1, flexDirection: "column" }}>
        <TopNav crumbs={["Castle Stiel", "Prepare for Ascent"]} />
        <View
          className="flex flex-row"
          style={{ flex: 12, borderWidth: 2, borderColor: color }}
        >
          <TyrantSelectColumn />
          <CastleStielFacilitiesColumn />
          <TyrantOrderColumn />
        </View>
        <CardDrive />
        <Footer />
      </View>
    </SafeAreaView>
  );
});
