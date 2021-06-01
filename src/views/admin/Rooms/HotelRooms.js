import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Text, Image, Button, Platform,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';
import { Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import CreateRoom from './CreateRoom';

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
  button: {
    backgroundColor: '#1F3B3F',
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontSize: 30,
  },
});

const Rooms = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [rooms, setRooms] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  function getRooms() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        hotel_id: user.hotel_admin,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/users/actions/rooms', options)
      .then((response) => {
        console.log(response.data);
        setRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteRoom(room) {
    console.log(room);
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        room_id: room.room_id,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/admin/actions/room/delete', options)
      .then((response) => {
        console.log(response.data);
        getRooms();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (rooms === false) {
    getRooms();
  }

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <View>
        <Button title="Open Overlay" onPress={toggleOverlay} />
        {
        Platform.OS === 'android'
          ? (
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
              <CreateRoom hotelId={user.hotel_admin} />
            </Overlay>
          ) : (
            <Overlay
              isVisible={visible}
              ModalComponent={Modal}
              onBackdropPress={toggleOverlay}
              ariaHideApp={false}
            >
              <CreateRoom hotelId={user.hotel_admin} />
            </Overlay>
          )
      }
      </View>

      <View>
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />

        <Searchbar
          placeholder="Search a location"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <FlatList
          data={rooms}
          keyExtractor={(item) => item.room_id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image source={hotelImage} style={styles.image} />
              <Text style={styles.text}>
                Room
                {' '}
                {item.name}
                {' \n'}
                Price:
                {' '}
                {item.price}
              </Text>
              <Button title="Delete room" onPress={() => deleteRoom(item)} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Rooms;
