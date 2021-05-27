/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HotelsPage from '../Hotels/HotelsPage';
import Pending from '../Pending/PendingScreen';
import Reservations from '../Reservations/ReservationsScreen';

let user;

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>
        Hi user,
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

const UserHome = ({ navigation, route }) => {
  console.log(navigation);
  user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} user={user} initialRouteName="UserHome" />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Hotels" component={HotelsPage} initialParams={route.params} />
      <Drawer.Screen name="Reservations" component={Reservations} initialParams={route.params} />
      <Drawer.Screen name="Pending Reservations" component={Pending} initialParams={route.params} />
    </Drawer.Navigator>
  );
};

export default UserHome;
