import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../views/StartPage/StartScreen';
import LoginScreen from '../views/Login/LoginScreen';
import AboutUsScreen from '../views/AboutUs/AboutUsScreen';
import SignUpScreen from '../views/CreateAccount/SignUpScreen';
import ReservationScreen from '../views/MakeReservation/MakeReservation';
import UserHomeScreen from '../views/UserHome/UserHome';
import DebugScreen from '../views/DebugScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
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

    </Stack.Navigator>
  );
}

export default RootStack;
