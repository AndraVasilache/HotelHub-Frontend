import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from '../views/StartPage/StartScreen';
import LoginScreen from '../views/Login/LoginScreen';
import AboutUsScreen from './../views/AboutUs/AboutUsScreen';
import SignUpScreen from '../views/CreateAccount/SignUpScreen';
import MakeReservation from '../views/MakeReservation/MakeReservation';

const Navigator = createStackNavigator(
  {
    Start: StartScreen,
    Login: LoginScreen,
    AboutUs: AboutUsScreen,
    CreateAccount: SignUpScreen,
    MakeReservation: MakeReservation
    // Test: TestScreen
  },
  {
    initialRouteName: 'MakeReservation',
    defaultNavigationOptions: {
      title: 'HotelHub',
    },
  }
);

export default createAppContainer(Navigator);