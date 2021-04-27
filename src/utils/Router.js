import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/HomeScreen';
import LoginScreen from './../screens/LoginScreen';
import CreateAccount from './../screens/CreateAccountScreen';

const Stack = createStackNavigator();

// const Navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Login: LoginScreen,
//     CreateAccount: CreateAccount,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'HotelHub',
//     },
//   }
// );

// }


export default createAppContainer(Navigator);