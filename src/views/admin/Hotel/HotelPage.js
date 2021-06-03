import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Platform, Text,
} from 'react-native';
import {
  Button, Card, Title,
} from 'react-native-paper';
import axios from 'axios';

const hotelImageMissing = require('../../../../assets/imagenotfound.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
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
        setHotel(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
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

  // update page state
  if (hotel.id === '') {
    get();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.inputText}>
          Open menu
        </Text>
      </TouchableOpacity>
      <Card>
        <Card.Title title={hotel.name} subtitle={hotel.location} />
        <Card.Content>
          <Title>This is the hotel you are currently managing!</Title>
        </Card.Content>
        <Card.Cover source={hotel.photo || hotelImageMissing} />
        <Card.Actions>
          <Button onPress={deleteHotel}> Delete Hotel</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default HotelPage;
