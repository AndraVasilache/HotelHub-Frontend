import React from 'react';
import {
  StyleSheet, View, FlatList, Text, Image,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

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

const HotelsPage = () => {
  const list = [
    {
      name: 'hotel1',
      picture: '',
      location: 'location1',
    },
    {
      name: 'hotel2',
      picture: '',
      location: 'location2',
    },
    {
      name: 'hotel3',
      picture: '',
      location: 'location2',
    },
    {
      name: 'hotel4',
      picture: '',
      location: 'location2',
    },
    {
      name: 'hotel5',
      picture: '',
      location: 'location2',
    },
    {
      name: 'hotel6',
      picture: '',
      location: 'location2',
    },
  ];
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Search a location"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
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
          </View>
        )}
      />
    </View>
  );
};

export default HotelsPage;
