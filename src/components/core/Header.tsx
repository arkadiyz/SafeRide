import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { colors } from '../../assets/styles/colors';
import { typography } from '../../assets/styles/typography';
import Arrow_icon from '../../assets/icons/arrow.svg';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
}

export default function Header({
  title,
  subtitle,
  onBackPress,
  showBackButton = true,
}: HeaderProps) {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor={colors.black} /> */}
      <View style={styles.container}>
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            {/* <Text style={styles.backArrow}>→</Text> */}
          <Arrow_icon width={15} height={15}/>
          </TouchableOpacity>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        {/* <View style={styles.rightSpace} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    shadowColor: colors.black, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 1, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
  },
  backArrow: {
    fontSize: 24,
    color: colors.text.primary,
    fontWeight: typography.weights.bold,
  },
  textContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    textAlign:'right'
},
title: {
    fontSize: typography.sizes.title,
    // fontWeight: typography.weights.xbold,
    color: colors.text.primary,
    fontFamily: typography.fonts.ultraBold,
    textAlign:'right'
},
subtitle: {
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    fontFamily: typography.fonts.medium,
    textAlign:'right'
  },
  rightSpace: {
    width: 40,
  },
  leftSpace: {
    width: 40,
  },
});
