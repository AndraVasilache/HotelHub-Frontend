import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Text, Image, Button,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
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

const HotelsPage = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [hotels, setHotels] = useState([]);

  const [searchQuery, setSearchQuery] = React.useState('');

  function getHotels() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/users/actions/hotels', options)
      .then((response) => {
        console.log(response.data);
        setHotels(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (hotels.length === 0) {
    getHotels();
  }

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />

      <Searchbar
        placeholder="Search a location"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Text>
        test user mail:
        {user.email}
      </Text>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.name + item.location}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={hotelImage} style={styles.image} />
            <Text style={styles.text}>
              Hotel
              {' '}
              {item.name}
              {' \n'}
              Location:
              {' '}
              {item.location}
            </Text>
            <Button title="Make Reservation" />
          </View>
        )}
      />
    </View>
  );
};

export default HotelsPage;
