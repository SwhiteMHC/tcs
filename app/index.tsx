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
import { AnimatedIconName } from "@/components/CustomAnimatedBaseIconH/CustomAnimatedBaseIconH";
import CustomAnimatedNavigationButton from "@/components/CustomAnimatedNavigationButton/CustomAnimatedNavigationButton";
import { useColorScheme } from "nativewind";

export default function Home() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const color = colorScheme === "dark" ? "white" : "black";

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
              borderColor: color,
            }}
            className="flex flex-row items-center justify-between"
          >
            <Header crumbs={["Castle Stiel", "Access Screen"]} />
            <View>
              <ThemeToggle />
            </View>
          </View>
          <View style={{ flex: 12, borderWidth: 2, borderColor: color }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: color, fontSize: 22 }}>Main Play Area</Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              borderWidth: 2,
              borderColor: color,
              alignSelf: "stretch",
            }}
          >
            <View className="flex flex-1 flex-row justify-end items-center gap-x-2">
              <CustomAnimatedNavigationButton
                title="Exit"
                icon={AnimatedIconName.RUN}
                size={32}
                flip={true}
                shouldAnimate={true}
              />
              <CustomAnimatedNavigationButton
                title="Enter"
                icon={AnimatedIconName.RUN}
                size={32}
                flip={false}
                shouldAnimate={false}
              />
            </View>
          </View>
          <View style={{ flex: 0.5, borderWidth: 2, borderColor: color }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: color }}></Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
