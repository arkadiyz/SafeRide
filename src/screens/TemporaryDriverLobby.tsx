import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { NavigationProps } from '../types';
import { colors } from '../assets/styles/colors';
import { typography } from '../assets/styles/typography';

// ייבוא SVG מהנכסים שלך
import CarIcon from '../assets/icons/car.svg';
import M_d_Icon from '../assets/icons/m_d.svg';
import SuccessCar from '../assets/icons/f_d.svg';
import F_Icon from '../assets/icons/f.svg';
import M_Icon from '../assets/icons/m.svg';
import { Header, Card } from '../components';

export default function TemporaryDriverLobby({ navigation }: NavigationProps) {
  const handleAddAuthorized = () => {
    navigation.navigate('AddUser');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="ניהול נהג זמני"
        subtitle="שברולט ספארק 000-000-678"
        onBackPress={() => navigation.goBack()}
      />
      <View style={{  justifyContent: 'flex-start',  }}>
        <Card style={{  marginLeft: 20, marginRight: 20 , marginTop: 15}}>
          <View style={styles.row}>
            <M_d_Icon width={75} height={75} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>כיסוי נהג זמני</Text>
              <Text style={styles.cardDescription}>
                הוספת כיסוי נהג צעיר או כיסוי{'\n'}
                כל נהג לביטוח הרכב שלך
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>הוספת כיסוי</Text>
          </TouchableOpacity>
        </Card>
      </View>

      {/* הודעת מידע */}
      <View style={styles.infoBox}>
        <CarIcon width={40} height={40} color="#5B3FFF" />
        <Text style={styles.infoText}>
          נראה שעדיין אין לך היסטורית{'\n'}
          רכישות, בעתיד ניתן לראות כאן{''}
        </Text>
        <Text style={styles.infoButtomText}>כיסויים שכבר אינם בתוקף</Text>
      </View>

      {/* כרטיס הוספת מורשה */}
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
        <Card
          style={{ marginLeft: 20, marginRight: 20 }}
        >
          <View style={styles.row}>
            <M_Icon width={75} height={75} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>הוספת מורשה</Text>
              <Text style={styles.cardDescription}>
                הילדים רוצים להוסיף כיסוי זמני?{'\n'}
                מעכשיו ניתן למבוטחים מורשים{'\n'}
                להוספת כיסוי זמני בעצמם
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={handleAddAuthorized}
          >
            <Text style={styles.linkButtonText}>
              {'להוספת מורשה בבטיוח שלך  >'}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },

  content: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  cardText: {
    flex: 1,
  },

  cardTitle: {
    marginBottom: 8,
    textAlign: 'right',
    fontSize: typography.sizes.title,
    color: colors.text.primary,
    fontFamily: typography.fonts.ultraBold,
  },

  cardDescription: {
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    fontFamily: typography.fonts.medium,
    textAlign: 'right',
    lineHeight: 18,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: colors.white,
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    fontFamily: typography.fonts.medium,

  },

  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: colors.white,
  },

  infoText: {
    textAlign: 'center',
    lineHeight: 18,
    color: colors.text.primary,
    fontFamily: typography.fonts.medium,
    fontSize: typography.sizes.large,
    fontWeight: typography.weights.semibold,
    fontFamily: typography.fonts.medium,

  },
  infoButtomText:{
    color: colors.text.primary,
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    fontFamily: typography.fonts.bold,
  },
  linkButton: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  linkButtonText: {
    fontSize: typography.sizes.xlarge,
    // fontWeight: typography.weights.bold,
    color: colors.link,
    fontFamily: typography.fonts.ultraBold,

  },
});
