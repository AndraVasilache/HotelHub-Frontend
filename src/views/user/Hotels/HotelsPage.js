import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Text,
} from 'react-native';
import {
  Searchbar, Card, Paragraph, Button,
} from 'react-native-paper';

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

  // eslint-disable-next-line camelcase
  function goToMakeReservation(hotel_id) {
    navigation.navigate('MakeReservation', { hotel_id, user });
  }

  if (hotels.length === 0) {
    setHotels([
      {
        photo: hotelImage,
        hotel_id: 1,
        name: 'Mirage',
        location: 'Mamaia',
      },
      {
        photo: hotelImage,
        hotel_id: 2,
        name: 'Atlantis',
        location: 'Constanta',
      },
      {
        photo: hotelImage,
        hotel_id: 3,
        name: 'Gargantua',
        location: 'Transilvania',
      }]);
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
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.hotel_id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Card>
              <Card.Title title={item.name} />
              <Card.Content>
                <Paragraph>
                  Location:
                  {item.location}
                </Paragraph>
              </Card.Content>
              <Card.Cover source={hotelImage} />
              <Card.Actions>
                <Button onPress={() => goToMakeReservation(item.hotel_id)}>Make Reservation</Button>
              </Card.Actions>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

export default HotelsPage;
