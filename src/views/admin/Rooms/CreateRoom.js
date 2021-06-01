import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Platform,
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import axios from 'axios';
import { set } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontFamily: 'Playfair',
    padding: 10,
  },
  input: {
    fontSize: Platform.OS === 'android' ? 15 : 20,
    width: Platform.OS === 'android' ? '100%' : '80%',
    marginBottom: 10,
    color: '#274650',
    backgroundColor: 'white',
    fontFamily: 'Playfair',
  },
  title: {
    fontSize: Platform.OS === 'android' ? 15 : 20,
    width: Platform.OS === 'android' ? '100%' : '80%',
    marginBottom: 10,
    color: '#274650',
    backgroundColor: 'white',
    fontFamily: 'Playfair',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#1F3B3F',
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputText: {
    color: 'white',
    fontFamily: 'Playfair',
  },
});

const CreateRoom = ({ hotelId }) => {
  const [room, setRoom] = useState({
    name: '',
    price: '',
    noOfPeople: '',
    type: '',
  });

  const priceValidation = () => Number.isNaN(parseInt(room.price, 10));

  const noPeopleValidation = () => Number.isNaN(parseInt(room.noOfPeople, 10));

  function addRoom() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };

    axios.post('https://hotelhubip.herokuapp.com/admin/actions/room/add', {
      price: room.price,
      name: room.name,
      hotel_id: hotelId,
      no_of_people: room.noOfPeople,
      type: room.type,
    }, options)
      .then((response) => {
        console.log(response);
        setRoom({
          name: '',
          price: '',
          noOfPeople: '',
          type: '',
        });
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Add a new room </Text>

      <TextInput
        style={styles.input}
        placeholder="Room number"
        value={room.name}
        onChangeText={(name) => setRoom({ ...room, name })}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={room.price}
        onChangeText={(price) => setRoom({ ...room, price })}
      />
      {room.price && priceValidation() ? (
        <HelperText type="error" visible={priceValidation()}>
          Price is not a number!
        </HelperText>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Number of people"
        value={room.noOfPeople}
        onChangeText={(noOfPeople) => setRoom({ ...room, noOfPeople })}
      />
      {room.noOfPeople && noPeopleValidation() ? (
        <HelperText type="error" visible={noPeopleValidation()}>
          Number of people should be a number!
        </HelperText>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Room type"
        value={room.type}
        onChangeText={(type) => setRoom({ ...room, type })}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={addRoom}
      >
        <Text style={styles.inputText}>
          Create room
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateRoom;
