import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../views/start/StartPage/StartScreen';
import LoginScreen from '../views/start/Login/LoginScreen';
import AboutUsScreen from '../views/start/AboutUs/AboutUsScreen';
import SignUpScreen from '../views/start/CreateAccount/SignUpScreen';
import ReservationScreen from '../views/user/MakeReservation/MakeReservation';
import UserHomeScreen from '../views/user/UserHome/UserHome';
import AdminHomeScreen from '../views/admin/AdminHome/AdminHome';
import HotelsScreen from '../views/user/Hotels/HotelsPage';
import DebugScreen from '../views/DebugScreen';
import HotelRegistration from '../views/admin/HotelRegistration/HotelRegistration';
import TestScreen from '../views/Test';
import TestWeb from '../views/TestWeb';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Debug">
      <Stack.Screen
        name="Debug"
        component={DebugScreen}
      />

      <Stack.Screen
        name="Test"
        component={TestScreen}
      />

      <Stack.Screen
        name="TestWeb"
        component={TestWeb}
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

      <Stack.Screen
        name="Hotels"
        component={HotelsScreen}
      />

      <Stack.Screen
        name="HotelRegistration"
        component={HotelRegistration}
      />

    </Stack.Navigator>
  );
}

export default RootStack;
