// components/ScreenLayout.tsx
import React from "react";
import { SafeAreaView, View, ViewStyle } from "react-native";
import Header from "./Header/Header";

export type Size = number | `${number}%`; // dp or percentage
type Props = {
  headerHeight?: Size;
  controlBarHeight?: Size;
  footerHeight?: Size;
  children?: React.ReactNode; // your Main View
  header?: React.ReactNode;
  controlBar?: React.ReactNode;
  footer?: React.ReactNode;
  style?: ViewStyle; // optional container overrides
};

export default function ScreenLayout({
  headerHeight = 96,
  controlBarHeight = 72,
  footerHeight = 72,
  header,
  controlBar,
  footer,
  children,
  style,
}: Props) {
  return (
    <SafeAreaView className="flex-1 bg-bg-light dark:bg-bg-dark" style={style}>
      <View className="flex-1 flex-col w-full">
        {/* Header */}
        <View
          className="w-full border-2 border-solid border-red-500"
          style={{ height: headerHeight }}
        >
          {header ?? <Header crumbs={["Home", "Details"]} />}
        </View>

        {/* Main (fills the rest) */}
        <View className="flex-1 w-full min-h-0">{children}</View>

        {/* Control Bar */}
        <View className="w-full" style={{ height: controlBarHeight }}>
          {controlBar}
        </View>

        {/* Footer */}
        <View className="w-full" style={{ height: footerHeight }}>
          {footer}
        </View>
      </View>
    </SafeAreaView>
  );
}
