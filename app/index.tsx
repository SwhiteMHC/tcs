// React Native
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Components

// Hooks
import Header from "@/components/Header/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

// Styles

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {/* Background image UNDER everything */}
      <ImageBackground
        source={require("../assets/bg/tcs_castle_stiel_bg_transparent_2732_2048.png")}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, { position: "absolute", zIndex: -1 }]}
        pointerEvents="none"
      />

      {/* Dim overlay UNDER content */}
      <View
        style={[StyleSheet.absoluteFill, { position: "absolute", zIndex: -2 }]}
        // if you use NativeWind:
        className="bg-white/50 dark:bg-black"
      />

      {/* Foreground content (no absolute) */}
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              flex: 0.5,
              padding: 16,
              borderWidth: 2,
              borderColor: "red",
            }}
            className="flex flex-row items-center justify-between"
          >
            <Header crumbs={["Castle Stiel", "Access Screen"]} />
            <View>
              <ThemeToggle />
            </View>
          </View>
          <View style={{ flex: 12, borderWidth: 2, borderColor: "red" }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 22 }}>
                Main Play Area
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, borderWidth: 2, borderColor: "red" }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Control Bar</Text>
            </View>
          </View>
          <View style={{ flex: 0.5, borderWidth: 2, borderColor: "red" }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>Footer</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
