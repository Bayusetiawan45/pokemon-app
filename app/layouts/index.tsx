import React, { ReactNode } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

interface LayoutProps {
  children: ReactNode
  style?: ViewStyle
}

const Layout = ({ children, style }: LayoutProps) => {
  return (
    <SafeAreaView style={[styles.layout, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal: 5
  },
  view: {
    flex: 1
  }
});

export default Layout;
