import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { NavigationProps } from '../types';
import { Header, Button, Checkbox } from '../components';
import CustomInput from '../components/core/CustomInput';
import F_Icon from '../assets/icons/f.svg';
import { colors } from '../assets/styles/colors';
import { typography } from '../assets/styles/typography';
import Flag_Icon from '../assets/icons/flag.svg';
import ArrowDouwn_Icon from '../assets/icons/arrow_douwn.svg';

interface FormData {
  firstName: string;
  lastName: string;
  idNumber: string;
  birthDate: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  idNumber?: string;
  birthDate?: string;
  phone?: string;
}

export default function AddAuthorizedUser({ navigation }: NavigationProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    idNumber: '',
    birthDate: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // --- ולידציות (כמו אצלך) ---
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'שדה חובה';
    if (name.trim().length < 2) return 'שם חייב להכיל לפחות 2 תווים';
    if (!/^[א-ת\s]+$/.test(name.trim()))
      return 'השם חייב להכיל אותיות בעברית בלבד';
    return undefined;
  };

  const validateIdNumber = (id: string): string | undefined => {
    if (!id.trim()) return 'שדה חובה';
    if (!/^\d{9}$/.test(id.trim())) return 'תעודת זהות חייבת להכיל 9 ספרות';
    return undefined;
  };

  const validateBirthDate = (date: string): string | undefined => {
    if (!date.trim()) return 'שדה חובה';
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date.trim()))
      return 'פורמט תאריך לא תקין (dd/mm/yyyy)';
    
    // בדיקת גיל מינימלי 17
    const [day, month, year] = date.trim().split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    
    // חישוב הגיל
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    if (age < 17) {
      return 'גיל מינימלי הוא 17 שנים';
    }
    
    // בדיקה שהתאריך לא בעתיד
    if (birthDate > today) {
      return 'תאריך לידה לא יכול להיות בעתיד';
    }
    
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return 'שדה חובה';
    if (!/^05\d-?\d{7}$/.test(phone.trim())) return 'מספר טלפון לא תקין';
    return undefined;
  };

  const updateField = (field: keyof FormData, value: string) => {
    console.log("field: ",field);
    console.log("value: ",value);
    setFormData(prev => ({ ...prev, [field]: value }));

    let error: string | undefined;
    switch (field) {
      case 'firstName':
        error = validateName(value);
        break;
      case 'lastName':
        error = validateName(value);
        break;
      case 'idNumber':
        error = validateIdNumber(value);
        break;
      case 'birthDate':
        error = validateBirthDate(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      firstName: validateName(formData.firstName),
      lastName: validateName(formData.lastName),
      idNumber: validateIdNumber(formData.idNumber),
      birthDate: validateBirthDate(formData.birthDate),
      phone: validatePhone(formData.phone),
    };

    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(
      error => error !== undefined,
    );
    return !hasErrors && isTermsAccepted;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate('Success');
    } else if (!isTermsAccepted) {
      Alert.alert('שגיאה', 'יש לאשר את התנאים');
    }
  };

  const isFormValid = () => {
    return (
      Object.values(errors).every(error => !error) &&
      Object.values(formData).every(value => value.trim() !== '') &&
      isTermsAccepted
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="הוספת נהג מורשה" onBackPress={() => navigation.goBack()} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* תוכן נגלל */}
        <ScrollView
          style={styles.formContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {/* User Info */}
          <View style={styles.formHeader}>
            <View style={styles.avatar}>
              <F_Icon width={65} height={65} />
            </View>
            <Text style={styles.avatarTitle}>בת זוגתי</Text>
          </View>

          {/* Form Fields */}
          <CustomInput
            label="שם פרטי"
            placeholder="הכנס שם פרטי"
            value={formData.firstName}
            onChangeText={value => updateField('firstName', value)}
            error={errors.firstName}
          />

          <CustomInput
            label="שם משפחה"
            placeholder="הכנס שם משפחה"
            value={formData.lastName}
            onChangeText={value => updateField('lastName', value)}
            error={errors.lastName}
          />

          <CustomInput
            label="תעודת זהות"
            placeholder="תעודת זהות"
            value={formData.idNumber}
            onChangeText={value => updateField('idNumber', value)}
            error={errors.idNumber}
            keyboardType="numeric"
            maxLength={9}
          />

          <CustomInput
            label="תאריך לידה"
            placeholder="תאריך לידה"
            value={formData.birthDate}
            onChangeText={value => updateField('birthDate', value)}
            error={errors.birthDate}
          />

          <CustomInput
            label="מספר טלפון"
            placeholder="מספר טלפון"
            value={formData.phone}
            onChangeText={value => updateField('phone', value)}
            error={errors.phone}
            keyboardType="phone-pad"
          />

          {/* Notice */}
          <View style={styles.formBodyExtend}>
            <Flag_Icon width={30} height={30} />
            <View style={styles.rowText}>
              <Text style={styles.title}>שימו לב</Text>
              <Text style={styles.subTitle}>
                מספר טלפון צריך להיות שונה משלכם
              </Text>
            </View>
          </View>

          {/* Fake Dropdown */}
        </ScrollView>
        <TouchableOpacity style={styles.fakeDropdown} onPress={() => {}}>
            <ArrowDouwn_Icon width={15} height={15} />
            <Text style={styles.dropdownText}>אותיות קטנות שכדאי לדעת</Text>
          </TouchableOpacity>
          
        {/* Footer קבוע */}
        <View style={styles.formFooter}>

          <Checkbox
            labelParts={[
              { text: 'מאשר/ת שקראתי את ' },
              { text: 'התקנון', bold: true },
            ]}
            checked={isTermsAccepted}
            onPress={() => setIsTermsAccepted(!isTermsAccepted)}
            style={styles.checkboxContainer}
          />

          <Button
            title="שמירת פרטים והוספה"
            onPress={handleSubmit}
            disabled={!isFormValid()}
            variant="primary"
            style={styles.submitButton}
          />

          <Button
            title="ביטול"
            onPress={() => navigation.goBack()}
            variant="outline"
            style={styles.cancelButton}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  formContainer: { flex: 1, padding: 10 },
  formHeader: { alignItems: 'center', marginVertical: 20 },
  avatar: { paddingBottom: 10 },
  avatarTitle: {
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    fontFamily: typography.fonts.medium,
  },
  formBodyExtend: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 20,
  },
  rowText: { flexDirection: 'column', marginRight: 8 },
  title: {
    fontSize: typography.sizes.large,
    fontFamily: typography.fonts.bold,
    color: colors.text.primary,
    textAlign: 'right',
  },
  subTitle: {
    fontSize: typography.sizes.small,
    color: colors.text.secondary,
    textAlign: 'right',
  },
  formFooter: {
    padding: 16,
    // borderTopWidth: 1,
    // borderTopColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  checkboxContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButton: { marginBottom: 10 },
  cancelButton: { marginBottom: 10 },
  fakeDropdown: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 12,
  },
  dropdownArrow: {
    fontSize: 18,
    marginLeft: 5,
    color: colors.text.primary,
  },
  dropdownText: {
    color: colors.text.primary,
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    fontFamily: typography.fonts.bold,
  },
});
