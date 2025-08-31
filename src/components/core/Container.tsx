import React, { ReactNode } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { colors } from '../../assets/styles/colors';

interface ContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  padding?: number;
  safeArea?: boolean;
}

export default function Container({
  children,
  style,
  padding = 16,
  safeArea = true,
}: ContainerProps) {
  const WrapperComponent = safeArea ? SafeAreaView : View;
  
  return (
    <WrapperComponent style={[styles.container, style]}>
      <View style={[styles.content, { padding }]}>
        {children}
      </View>
    </WrapperComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
});