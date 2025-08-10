// React Native
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Components
import Overlay from "@/components/Overlay/Overlay";
import TopNav from "@/components/TopNav/TopNav";
import TyrantNameSelect from "@/components/TyrantNameSelect/TyrantNameSelect";

// Hooks
import { useNavigation } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

// Styles

// Store
import CardDrive from "@/components/CardDrive/CardDrive";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/provider";

export default observer(function Prepare() {
  const { tyrants } = useStore();
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
          <View
            style={{ flex: 1, flexDirection: "column" }}
            className="border-2 border-solid border-red-500"
          >
            <View className="flex flex-1 items-center justify-center">
              <Text className="text-black dark:text-white text-lg text-center">
                Tyrants Aboard:
              </Text>
            </View>
            <View className="gap-y-2">
              {tyrants.map((tyrant, index) => (
                <TyrantNameSelect
                  name={tyrant.name}
                  key={index}
                  disabled={false}
                />
              ))}
            </View>
          </View>
          <View
            style={{ flex: 2, flexDirection: "column" }}
            className="flex flex-2 border-2 border-solid border-green-500"
          ></View>
          <View
            style={{ flex: 1, flexDirection: "column" }}
            className="flex flex-1 border-2 border-solid border-blue-500"
          ></View>
        </View>
        <CardDrive />
      </View>
    </SafeAreaView>
  );
});
