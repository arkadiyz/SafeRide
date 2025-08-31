import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types';
import TemporaryDriverLobby from '../screens/TemporaryDriverLobby';
import AddAuthorizedUser from '../screens/AddAuthorizedUser';
import SuccessPage from '../screens/SuccessPage';
import { colors } from '../assets/styles/colors';
import { typography } from '../assets/styles/typography';
import { Text } from 'react-native';

// ייבוא האייקונים החדשים
import HomeIcon from '../assets/icons/home.svg';
import ListIcon from '../assets/icons/list.svg';
import InfoIcon from '../assets/icons/info.svg';
import ClubIcon from '../assets/icons/club.svg';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// קומפוננטת Bottom Tabs עבור מסך ההצלחה
function SuccessTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.light,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.lightGray,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          flexDirection: 'row-reverse', // זה הופך את הכיוון של הטאבים
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -13,   // מינוס כדי שהצל יופיע למעלה
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 15,  // לאנדרואיד
        },
        tabBarLabelStyle: {
          fontSize: typography.sizes.small,
          fontFamily: typography.fonts.medium,
          marginTop: 4,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 3,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen 
        name="Club" 
        component={SuccessPage}
        options={{
          tabBarLabel: 'מועדון ישיר',
          tabBarIcon: ({ focused }) => (
            <ClubIcon 
              width={24} 
              height={24} 
              color={focused ? colors.primary : colors.text.light}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Events" 
        component={SuccessPage}
        options={{
          tabBarLabel: 'משהו קרה',
          tabBarIcon: ({ focused }) => (
            <InfoIcon 
              width={24} 
              height={24} 
              color={focused ? colors.primary : colors.text.light}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Actions" 
        component={SuccessPage}
        options={{
          tabBarLabel: 'פעולות ומידע',
          tabBarIcon: ({ focused }) => (
            <ListIcon 
              width={24} 
              height={24} 
              color={focused ? colors.primary : colors.text.light}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={SuccessPage}
        options={{
          tabBarLabel: 'בית',
          tabBarIcon: ({ focused }) => (
            <HomeIcon 
              width={24} 
              height={24} 
              color={focused ? colors.primary : colors.text.light}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Lobby"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Lobby" component={TemporaryDriverLobby} />
        <Stack.Screen name="AddUser" component={AddAuthorizedUser} />
        <Stack.Screen name="Success" component={SuccessTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}