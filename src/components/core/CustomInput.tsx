import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/colors';
import { typography } from '../../assets/styles/typography';

interface CustomInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  error?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  maxLength?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  error,
  keyboardType = 'default',
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {(isFocused || value) && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={keyboardType}
        placeholderTextColor={colors.text.light}
        maxLength={maxLength}
        textAlign="right"
        writingDirection="rtl"
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: typography.sizes.medium,
    color: colors.text.primary,
    marginBottom: 4,
    textAlign: 'right',
    fontFamily: typography.fonts.medium,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.text.secondary,
    fontSize: typography.sizes.large,
    paddingVertical: 8,
    color: colors.text.primary,
    textAlign: 'right',
    fontFamily: typography.fonts.regular,
  },
  inputError: {
    borderBottomColor: colors.error,
  },
  error: {
    fontSize: typography.sizes.small,
    color: colors.error,
    marginTop: 4,
    textAlign: 'right',
    fontFamily: typography.fonts.medium,
  },
});

export default CustomInput;