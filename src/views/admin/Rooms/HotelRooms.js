import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Platform, TouchableOpacity,
} from 'react-native';
import {
  Card, Paragraph, Button, Text,
} from 'react-native-paper';
import axios from 'axios';
import { Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import CreateRoom from './CreateRoom';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5c0099',
    borderRadius: 25,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontFamily: 'Playfair',
    alignSelf: 'center',
  },
  inputText: {
    color: 'white',
    fontFamily: 'Playfair',
    fontSize: Platform.OS === 'web' ? 20 : 15,
  },
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Playfair',
    paddingBottom: 10,
    marginBottom: 12,
  },
  image: {
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Playfair',
  },
});

const Rooms = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [rooms, setRooms] = useState(false);
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

  return (
    <View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={styles.inputText}>
            Open menu
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={toggleOverlay}
        >
          <Text style={styles.inputText}>
            Add a new room
          </Text>
        </TouchableOpacity>

        {/* add a room modal */}
        <View>
          {
        Platform.OS === 'android'
          ? (
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
              <CreateRoom
                hotelId={user.hotel_admin}
                onSubmit={() => {
                  setVisible(false);
                  getRooms();
                }}
              />
            </Overlay>
          ) : (
            <Overlay
              isVisible={visible}
              ModalComponent={Modal}
              onBackdropPress={toggleOverlay}
              ariaHideApp={false}
            >
              <CreateRoom
                hotelId={user.hotel_admin}
                onSubmit={() => {
                  setVisible(false);
                  getRooms();
                }}
              />
            </Overlay>
          )
      }
        </View>

        {/* room list */}
        <FlatList
          data={rooms}
          keyExtractor={(item) => item.room_id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card>
                <Card.Title title={item.name} />
                <Card.Content>
                  <Paragraph>
                    Price:
                    {' '}
                    {item.price}
                    {'\n'}
                    Number of people:
                    {' '}
                    {item.no_of_people}
                    {'\n'}
                    Type:
                    {' '}
                    {item.type}
                    {'\n'}
                  </Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={() => deleteRoom(item)}>Delete room</Button>
                </Card.Actions>
              </Card>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Rooms;
