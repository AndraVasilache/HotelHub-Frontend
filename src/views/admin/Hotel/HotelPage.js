import React, { useState } from 'react';
import {
  View, Text, Button, Image, StyleSheet,
} from 'react-native';
import axios from 'axios';

const hotelImage = require('../../../../assets/hotel_avatar.png');

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Playfair',
    paddingBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Playfair',
  },
});

function HotelPage({ route, navigation }) {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [hotel, setHotel] = useState({
    location: '', name: '', photo: '', id: '',
  });

  function get() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        hotel_id: user.hotel_admin,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/admin/actions/hotel/get', options)
      .then((response) => {
        console.log(response);

        setHotel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteHotel() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        user_id: user.user_id,
        hotel_id: user.hotel_admin,

      },
    };

    axios.get('https://hotelhubip.herokuapp.com//admin/actions/hotel/delete', options)
      .then((response) => {
        console.log(response);
        navigation.popToTop();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (hotel.id === '') {
    get();
  }

  if (hotel !== '') {
    console.log(hotel);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <View style={styles.container}>
        <Image source={hotelImage} style={styles.image} />
        <Text style={styles.text}>
          Hotel
          {' '}
          {hotel.name}
          {' \n'}
          Location:
          {' '}
          {hotel.location}
        </Text>
        <Button title="Delete Hotel" onPress={deleteHotel} />
      </View>
    </View>
  );
}

export default HotelPage;
