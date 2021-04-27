import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './../screens/HomeScreen';
import LoginScreen from './../screens/LoginScreen';
import AboutUsScreen from './../screens/AboutUsScreen';
import SignUpScreen from './../screens/SignUpScreen';
//import TestScreen from './../screens/test';

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    AboutUs: AboutUsScreen,
    CreateAccount: SignUpScreen
    // Test: TestScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'HotelHub',
    },
  }
);

export default createAppContainer(Navigator);