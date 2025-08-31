import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { colors } from '../../assets/styles/colors';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
  padding?: number;
  shadow?: boolean;
}

export default function Card({
  children,
  style,
  padding = 40,
  shadow = true,
}: CardProps) {
  return (
    <View
      style={[
        styles.card,
        shadow && styles.shadow,
        { padding },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    marginHorizontal: 4,
  },
  shadow: {
    shadowColor: colors.darkGray,
    shadowOffset: {
      width: -2,
      height: -20,
    },
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 0.3,
  },
});