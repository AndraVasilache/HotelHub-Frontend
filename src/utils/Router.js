import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../views/StartPage/StartScreen';
import LoginScreen from '../views/Login/LoginScreen';
import AboutUsScreen from '../views/AboutUs/AboutUsScreen';
import SignUpScreen from '../views/CreateAccount/SignUpScreen';
import ReservationScreen from '../views/MakeReservation/MakeReservation';
import DebugScreen from '../views/DebugScreen';

// const Navigator = createStackNavigator(
//   {
//     Start: StartScreen,
//     Login: LoginScreen,
//     AboutUs: AboutUsScreen,
//     CreateAccount: SignUpScreen,
//     MakeReservation: ReservationScreen,
//     Debug: DebugScreen,
//   },
//   {
//     initialRouteName: 'Debug',
//     defaultNavigationOptions: {
//       title: 'HotelHub',
//     },
//   },
// );

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ gestureEnabled: false }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
    />
  </Stack.Navigator>
);

export default Router;
