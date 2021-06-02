/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  View, Text, Button, ImageBackground, StyleSheet, Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HotelsPage from '../Hotels/HotelsPage';
import Pending from '../Pending/PendingScreen';
import Reservations from '../Reservations/ReservationsScreen';

const backgroundImage = require('../../../../assets/userHome.jpg');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultMessage: {
    color: '#5c0099',
    justifyContent: 'center',
    fontSize: Platform.OS === 'web' ? 27 : 19,
    height: 80,
    lineHeight: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Playfair',
  },
});

let user;

function Feed({ navigation }) {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.defaultMessage}>
          Hi,
          { ' ' }
          {user.name}
          { ' ' }
          ! Where to next?
        </Text>
        <Text>Feed Screen</Text>
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
    </ImageBackground>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close menu"
        onPress={() => props.navigation.closeDrawer()}
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
