import * as React from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

function get(user) {
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    params: {
      hotel_id: user.user_id,
    },
  };

  axios.get('https://hotelhubip.herokuapp.com/admin/actions/hotel/get', options)
    .then((response) => {
      console.log(response);

      if (response.data === '') {
        // setIncorrectLogin(true);
        return;
      }

      const hotel = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function HotelPage({ route, navigation }) {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  console.log(user);

  get(user);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Text>Hotel</Text>
    </View>
  );
}

export default HotelPage;
