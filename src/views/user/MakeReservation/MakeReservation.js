import React, { useState } from 'react';
import {
  StyleSheet, View, Button, Platform, Text, TouchableOpacity,
} from 'react-native';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import axios from 'axios';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    fontFamily: 'Playfair',
  },
  inputText: {
    color: 'white',
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
  pictureStyle: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'transparent',
  },
});

function MakeReservation({ hotelId, user }) {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [rooms, setRooms] = useState([]);

  function getRooms() {
    console.log(date);
    const startDate = `${date[0].getFullYear()}-${date[0].getMonth()}-${date[0].getDate()}`;
    const endDate = `${date[1].getFullYear()}-${date[1].getMonth()}-${date[1].getDate()}`;
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        hotel_id: hotelId,
        start_date: startDate,
        end_date: endDate,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/bookings/rooms/available', options)
      .then((response) => {
        console.log(response);
        setRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <DateRangePicker
        onChange={setDate}
        value={date}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => getRooms()}
      >
        <Text style={styles.inputText}>
          Check availability
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MakeReservation;
