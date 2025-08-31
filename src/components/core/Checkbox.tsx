import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../assets/styles/colors';
import { typography } from '../../assets/styles/typography';


interface CheckboxProps {
  label?: string;
  labelParts?: {
    text: string;
    bold?: boolean;
  }[];
  checked: boolean;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  checkboxStyle?: ViewStyle;
  size?: 'small' | 'medium' | 'large';
}

export default function Checkbox({
  label,
  labelParts,
  checked,
  onPress,
  disabled = false,
  style,
  labelStyle,
  checkboxStyle,
  size = 'medium',
}: CheckboxProps) {
  const sizeStyles = styles[size];

  const renderLabel = () => {
    if (labelParts) {
      return (
        <Text
          style={[
            styles.label,
            sizeStyles.label,
            disabled && styles.disabledLabel,
            labelStyle,
          ]}
        >
          {labelParts.map((part, index) => (
            <Text
              key={index}
              style={[
                part.bold && styles.boldText,
              ]}
            >
              {part.text}
            </Text>
          ))}
        </Text>
      );
    }

    if (label) {
      return (
        <Text
          style={[
            styles.label,
            sizeStyles.label,
            disabled && styles.disabledLabel,
            labelStyle,
          ]}
        >
          {label}
        </Text>
      );
    }

    return null;
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.checkbox,
          sizeStyles.checkbox,
          checked && styles.checkedCheckbox,
          disabled && styles.disabledCheckbox,
          checkboxStyle,
        ]}
      >
        {checked && (
          <Text style={[styles.checkmark, sizeStyles.checkmark]}>✓</Text>
        )}
      </View>
      {renderLabel()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // חזרה ל-row רגיל
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    borderWidth: 2, // הגדלת עובי המסגרת
    borderColor: colors.gray, // צבע יותר בולט
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  checkedCheckbox: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2, // שמירה על עובי מסגרת גם במצב סומן
  },
  disabledCheckbox: {
    opacity: 0.5,
  },
  checkmark: {
    color: colors.white,
    fontWeight: typography.weights.bold,
  },
  label: {
    marginRight: 12, // חזרה ל-marginRight
    fontFamily: typography.fonts.medium,
    color: colors.text.primary,
    textAlign: 'right',
    flex: 1, // הוספת flex כדי שהטקסט יתפוס את המקום הנותר
  },
  disabledLabel: {
    color: colors.text.light,
  },
  // Size variants
  small: {
    checkbox: {
      width: 16,
      height: 16,
    },
    checkmark: {
      fontSize: 10,
    },
    label: {
      fontSize: typography.sizes.small,
    },
  },
  medium: {
    checkbox: {
      width: 20,
      height: 20,
    },
    checkmark: {
      fontSize: 12,
    },
    label: {
      fontSize: typography.sizes.medium,
    },
  },
  large: {
    checkbox: {
      width: 24,
      height: 24,
    },
    checkmark: {
      fontSize: 14,
    },
    label: {
      fontSize: typography.sizes.large,
    },
  },
  boldText: {
    fontWeight: typography.weights.bold,
  },
});