import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationProps } from '../types';
import { colors } from '../assets/styles/colors';
import { typography } from '../assets/styles/typography';
import F_d_Icon from '../assets/icons/f_d.svg';
import { Button } from '../components';
import Arrow_icon from '../assets/icons/arrow.svg';

export default function SuccessPage({ navigation }: NavigationProps) {
  const handleOpenApp = () => {
    // פעולה לפתיחת האפליקציה או מעבר למסך הבא
    navigation.navigate('Lobby');
  };

  const handleBackToDriver = () => {
    // חזרה למוקד נהג
    navigation.navigate('Lobby');
  };

  return (
    <View style={styles.container}>
      {/* כפתור חזרה */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Arrow_icon width={15} height={15} />
      </TouchableOpacity>

      <View style={styles.content}>
        {/*  המכונית */}
        <View style={styles.carContainer}>
          <F_d_Icon width={275} height={275} />
        </View>

        {/* כותרת ראשית */}
        <Text style={styles.mainTitle}>
          המורשה התווספה{'\n'}
          בהצלחה!
        </Text>

        {/* טקסט הסבר */}
        <Text style={styles.description}>
          ההתחברות של מורשה לאפליקציה{'\n'}
          לטובת שירות 'נהג זמני' תהיה עם{'\n'}
          המספר 045****054, אם זה לא מס'{'\n'}
          הטלפון של המורשה, ניתן לפנות{'\n'}
          לשירות הלקוחות לעדכון הפרטים{'\n'}
        </Text>
        <View style={styles.footer}>
          <Button
            title="לשיטוף האפליקציה שלנו"
            onPress={handleOpenApp}
            // disabled={!isFormValid()}
            variant="primary"
            style={styles.submitButton}
          />

          <Button
            title="חזרה לניהול נהג זמני"
            onPress={() => handleBackToDriver}
            variant="outline"
            style={styles.cancelButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  backArrow: {
    fontSize: typography.sizes.title,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    fontFamily: typography.fonts.bold,
  },
  carContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100
  },
  mainTitle: {
    fontSize: typography.sizes.heading,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    textAlign: 'center',
    fontFamily: typography.fonts.bold,
    marginVertical: 40,
    lineHeight: typography.lineHeights.xlarge,
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,

    color: colors.text.primary,
    fontFamily: typography.fonts.medium,
    fontSize: typography.sizes.large,
    fontWeight: typography.weights.semibold,
    fontFamily: typography.fonts.medium,
  },
  submitButton: { marginBottom: 10 },
  footer:{
    justifyContent:'flex-end',
  },
  linkButton: {
    marginBottom: 20,
  },
  linkText: {
    fontSize: typography.sizes.medium,
    fontWeight: typography.weights.medium,
    color: colors.link,
    textAlign: 'center',
    fontFamily: typography.fonts.medium,
    textDecorationLine: 'underline',
  },
  
});
