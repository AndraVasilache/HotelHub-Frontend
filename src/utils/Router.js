import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './../screens/HomeScreen';
import LoginScreen from './../screens/LoginScreen';

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'HotelHub',
    },
  }
);

export default createAppContainer(Navigator);