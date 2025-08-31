import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { colors } from '../../assets/styles/colors';
import { typography } from '../../assets/styles/typography';

interface UserCardProps {
  name: string;
  avatar?: string;
  subtitle?: string;
  gender?: 'male' | 'female';
}

export default function UserCard({
  name,
  avatar,
  subtitle,
  gender = 'female',
}: UserCardProps) {
  // אייקונים לפי המיפוי שראיתי בתמונות
  const getAvatarIcon = () => {
    if (gender === 'female') {
      return require('../../assets/icons/f.svg'); // אייקון אישה
    } else {
      return require('../../assets/icons/m.svg'); // אייקון גבר
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Image source={getAvatarIcon()} style={styles.avatarIcon} />
          </View>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    marginHorizontal: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarIcon: {
    width: 40,
    height: 40,
    tintColor: colors.primary,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    marginBottom: 4,
    fontFamily: typography.fonts.medium,
    textAlign: 'right',
  },
  subtitle: {
    fontSize: typography.sizes.medium,
    color: colors.text.secondary,
    fontFamily: typography.fonts.medium,
    textAlign: 'right',
  },
});