/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  View, Text, Button, Platform, StyleSheet, ImageBackground, TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HotelPage from '../Hotel/HotelPage';
import Bookingscreen from '../Bookings/BookingScreen';
import Rooms from '../Rooms/HotelRooms';

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
  inputText: {
    color: 'white',
    fontFamily: 'Playfair',
    fontSize: Platform.OS === 'web' ? 20 : 15,
  },
  button: {
    backgroundColor: '#5c0099',
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    fontSize: 30,
  },
});

let user;

function Feed({ navigation }) {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.backgroundImage}>
        <Text style={styles.defaultMessage}>
          Hi,
          { ' ' }
          {user.name}
          { ' ' }
          ! What needs managing today?
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={styles.inputText}>
            Open menu
          </Text>
        </TouchableOpacity>
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

const AdminHome = ({ route }) => {
  user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
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
