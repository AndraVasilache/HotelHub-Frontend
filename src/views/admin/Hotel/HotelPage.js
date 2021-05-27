import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

function HotelPage({ route, navigation }) {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [hotel, setHotel] = useState(undefined);

  function get(user) {
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

  if (hotel == undefined) {
    console.log(hotel);
    get(user);
    console.log(hotel);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Text>Hotel</Text>
    </View>
  );
}

export default HotelPage;
