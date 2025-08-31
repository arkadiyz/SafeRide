# SafeRide - 

## דרישות מערכת

לפני התחלת העבודה, וודא שמותקנות לך הגדרות הבאות:

### 1. Node.js
- Node.js גרסה 18 ומעלה
- npm 

### 2. React Native CLI
```bash
npm install -g @react-native-community/cli
```

### 3. Android Studio (חובה לפיתוח Android)
- Android Studio עם Android SDK
- Android SDK Platform 31 ומעלה
- Android Build Tools
- Android Emulator או מכשיר Android פיזי

### 4. Java Development Kit (JDK)
- JDK 11 או 17
- הגדרת משתנה JAVA_HOME

### 5. משתני סביבה (Windows)
הוסף למשתני הסביבה:
```
ANDROID_HOME = C:\Users\[USERNAME]\AppData\Local\Android\Sdk
JAVA_HOME = C:\Program Files\Java\jdk-[VERSION]
```

הוסף ל-PATH:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%JAVA_HOME%\bin
```

## התקנת הפרויקט

### 1. שכפול הפרויקט
```bash
git clone [repository-url]
cd SafeRide
```

### 2. התקנת חבילות
```bash
npm install
# או
yarn install
```

### 3. הכנת הפרויקט לאנדרויד
מאחר והפיתוח התמקד באנדרויד, אין צורך בהתקנת CocoaPods (iOS).

## הרצת הפרויקט

### הפעלת Metro Bundler
בטרמינל ראשון:
```bash
npm start
# או
yarn start
```

### הרצה על Android
בטרמינל שני:

#### עם אמולטור:
1. פתח Android Studio
2. הפעל Android Emulator (AVD Manager)
3. הרץ:
```bash
npm run android
# או
yarn android
```

#### עם מכשיר פיזי:
1. הפעל Developer Options במכשיר
2. הפעל USB Debugging
3. חבר המכשיר למחשב
4. וודא שהמכשיר מזוהה:
```bash
adb devices
```
5. הרץ:
```bash
npm run android
# או
yarn android
```

## מבנה הפרויקט

```
src/
├── assets/                        # פונטים, אייקונים וסגנונות
├── components/                    # קומפוננטים משותפים
├── navigation/                    # ניווט באפליקציה
├── screens/                       # מסכי האפליקציה
│   ├── AddAuthorizedUser.tsx      # הוספת נהג מורשה
│   ├── SuccessPage.tsx            # מסך הצלחה
│   └── TemporaryDriverLobby.tsx   # לובי נהג זמני
└── types/                         # הגדרות TypeScript
```

## מסכים ראשיים

### הוספת נהג מורשה (AddAuthorizedUser)
מסך להוספת נהג מורשה חדש עם השדות הבאים:
- שם פרטי
- שם משפחה  
- תעודת זהות
- תאריך לידה (גיל מינימלי 17)
- מספר טלפון

### מסך הצלחה (SuccessPage)
מסך אישור לאחר הוספה מוצלחת של נהג מורשה.

## פתרון בעיות נפוצות

### שגיאת "Metro bundler failed"
```bash
npx react-native start --reset-cache
```

### שגיאת Android build
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### שגיאת "Command not found: adb"
וודא ש-Android SDK נמצא ב-PATH

### שגיאות של JavaScript Metro
```bash
npm start -- --reset-cache
```

## סקריפטים זמינים

```bash
npm start          # הפעלת Metro
npm run android    # build והרצה על Android
npm run lint       # בדיקת קוד
npm test          # הרצת בדיקות
```

## טכנולוגיות

- **React Native CLI** - פריימוורק ראשי
- **TypeScript** - שפת פיתוח
- **React Navigation** - ניווט
- **React Native SVG** - אייקונים
- **Custom Components** - קומפוננטים מותאמים

## הערות פיתוח

⚠️ **הפרויקט מותאם ל-Android בלבד**
הגדרות iOS קיימות אך לא נבדקו במהלך הפיתוח.

⚠️ **משתני סביבה**
וודא שכל משתני הסביבה של Android מוגדרים נכון.

⚠️ **חבילות נוספות**
אם מוסיפים חבילות חדשות עם קוד native, יש לבצע:
```bash
npx react-native run-android
```

## תמיכה

אם נתקלת בבעיות:
1. בדוק את [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
2. וודא שכל הדרישות מותקנות נכון
3. נסה לנקות cache עם `--reset-cache`

---

**פותח עם ❤️ ו-React Native**
