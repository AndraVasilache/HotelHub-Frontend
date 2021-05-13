import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../views/start/StartPage/StartScreen';
import LoginScreen from '../views/start/Login/LoginScreen';
import AboutUsScreen from '../views/start/AboutUs/AboutUsScreen';
import SignUpScreen from '../views/start/CreateAccount/SignUpScreen';
import ReservationScreen from '../views/user/MakeReservation/MakeReservation';
import UserHomeScreen from '../views/user/UserHome/UserHome';
import AdminHomeScreen from '../views/admin/AdminHome/AdminHome';
import DebugScreen from '../views/DebugScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Debug"
        component={DebugScreen}
      />

      <Stack.Screen
        name="Start"
        component={StartScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="CreateAccount"
        component={SignUpScreen}
      />

      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
      />

      <Stack.Screen
        name="MakeReservation"
        component={ReservationScreen}
      />

      <Stack.Screen
        name="UserHome"
        component={UserHomeScreen}
      />

      <Stack.Screen
        name="AdminHome"
        component={AdminHomeScreen}
      />

    </Stack.Navigator>
  );
}

export default RootStack;
