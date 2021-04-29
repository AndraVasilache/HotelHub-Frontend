import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from '../views/StartPage/StartScreen';
import LoginScreen from '../views/Login/LoginScreen';
import AboutUsScreen from './../views/AboutUs/AboutUsScreen';
import SignUpScreen from '../views/CreateAccount/SignUpScreen';
import TestScreen from '../views/test';

const Navigator = createStackNavigator(
  {
    Start: StartScreen,
    Login: LoginScreen,
    AboutUs: AboutUsScreen,
    CreateAccount: SignUpScreen,
    Test: TestScreen
  },
  {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
      title: 'HotelHub',
    },
  }
);

export default createAppContainer(Navigator);