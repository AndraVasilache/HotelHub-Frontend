import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Text, Platform, TouchableOpacity,
} from 'react-native';
import {
  Searchbar, Card, Paragraph, Button,
} from 'react-native-paper';
import axios from 'axios';

const hotelImage = require('../../../../assets/imagenotfound.jpg');

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Playfair',
    paddingBottom: 10,
  },
  image: {
    backgroundColor: 'white',
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
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    fontSize: 30,
  },
});

const HotelsPage = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [hotels, setHotels] = useState(false);

  const [searchQuery, setSearchQuery] = React.useState('');

  function getHotelsByLocation() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        location: searchQuery,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/client/location/hotels', options)
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getHotels() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/users/actions/hotels', options)
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function goToMakeReservation(hotelId) {
    navigation.navigate('MakeReservation', { hotelId, user });
  }

  if (hotels === false) {
    getHotels();
  }

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.inputText}>
          Open menu
        </Text>
      </TouchableOpacity>

      <Searchbar
        placeholder="Search a location"
        onChangeText={onChangeSearch}
        onSubmitEditing={getHotelsByLocation}
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
              <Card.Cover source={{ uri: item.photo } || hotelImage} style={styles.image} resizeMode="center" />
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
