import React, {useState} from 'react';
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
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

const HotelsPage = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [hotels, setHotels] = useState([]);

  // const list = [
  //   {
  //     name: 'hotel1',
  //     picture: '',
  //     location: 'location1',
  //   },
  //   {
  //     name: 'hotel2',
  //     picture: '',
  //     location: 'location2',
  //   },
  //   {
  //     name: 'hotel3',
  //     picture: '',
  //     location: 'location2',
  //   },
  //   {
  //     name: 'hotel4',
  //     picture: '',
  //     location: 'location2',
  //   },
  //   {
  //     name: 'hotel5',
  //     picture: '',
  //     location: 'location2',
  //   },
  //   {
  //     name: 'hotel6',
  //     picture: '',
  //     location: 'location2',
  //   },
  // ];
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const list = getHotels();

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
        data={list}
        keyExtractor={(item) => item.name}
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
