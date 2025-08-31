import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import { colors } from '../../assets/styles/colors';
import { typography } from '../../assets/styles/typography';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  required?: boolean;
  variant?: 'default' | 'outlined';
}

export default function Input({
  label,
  error,
  containerStyle,
  required = false,
  variant = 'outlined',
  style,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={styles.label}>
          {label+"AAAA"}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          variant === 'outlined' && styles.outlined,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          style,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={colors.text.light}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: typography.sizes.medium,
    fontWeight: typography.weights.medium,
    marginBottom: 8,
    color: colors.error,
    fontFamily: typography.fonts.medium,
    textAlign: 'right',
  },
  required: {
    color: colors.error,
  },
  input: {
    fontSize: typography.sizes.large,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white,
    color: colors.primary,
    fontFamily: typography.fonts.medium,
    textAlign: 'right',
    minHeight: 50,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 2,
  },
  errorText: {
    color: colors.error,
    fontSize: typography.sizes.small,
    marginTop: 6,
    textAlign: 'right',
    fontFamily: typography.fonts.medium,
  },
});