/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HotelPage from '../Hotel/HotelPage';
import Bookingscreen from '../Bookings/BookingScreen';
import Rooms from '../Rooms/HotelRooms';

let user;

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>
        Hi admin,
        { ' ' }
        {user.name}
        { ' ' }
        !
      </Text>
      <Text>Feed Screen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const AdminHome = ({ navigation, route }) => {
  console.log(navigation);
  user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  console.log(user);
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} user={user} initialRouteName="UserHome" />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Hotel" component={HotelPage} initialParams={route.params} />
      <Drawer.Screen name="Rooms" component={Rooms} initialParams={route.params} />
      <Drawer.Screen name="Bookings" component={Bookingscreen} initialParams={route.params} />
    </Drawer.Navigator>
  );
};

export default AdminHome;
