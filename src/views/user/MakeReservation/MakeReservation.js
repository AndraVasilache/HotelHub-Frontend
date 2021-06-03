import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Platform,
} from 'react-native';
import {
  Card, Paragraph, Button,
} from 'react-native-paper';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '70%',
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
    backgroundColor: '#5c0099',
    height: 50,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    fontSize: 30,
  },
  pictureStyle: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'transparent',
  },
  RNPickerSelectStyle: {
    width: 250,
  },
  defaultMessage: {
    color: '#5c0099',
    justifyContent: 'center',
    fontSize: Platform.OS === 'web' ? 25 : 20,
    height: 80,
    lineHeight: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Playfair',
  },
});

function MakeReservation({ route }) {
  const [date, setDate] = useState([new Date(), new Date()]);
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const hotelId = (route && route.params && route.params.hotelId) ? route.params.hotelId : '';
  let rooms = [];
  const [roomPicker, setRoomPicker] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(undefined);

  function getRooms() {
    const startDate = date[0].getTime();
    const endDate = date[1].getTime();
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
        rooms = response.data;
        const temp = [];
        rooms.forEach((entry) => {
          const pick = {};
          pick.label = entry.type;
          pick.entry = entry;
          temp.push(pick);
        });
        setRoomPicker(temp);
        console.log(roomPicker);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function confirmReservation() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        start_date: date[0].getTime(),
        end_date: date[1].getTime(),
        user_id: user.user_id,
      },
    };

    axios.post('https://hotelhubip.herokuapp.com/client/booking/create',
      selectedRoom, options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  return (
    <View style={styles.containerView}>
      <Text style={styles.defaultMessage}>
        Let me get you set up! First, pick a date
      </Text>
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

      <View style={styles.RNPickerSelectStyle}>
        <RNPickerSelect
          onValueChange={(_value, i) => setSelectedRoom(
            (roomPicker[i - 1] && roomPicker[i - 1].entry) || undefined,
          )}
          items={roomPicker}
        />
      </View>

      {selectedRoom && (
        <Card>
          <Card.Title title={selectedRoom.name} />
          <Card.Content>
            <Paragraph>
              Price:
              {' '}
              {selectedRoom.price}
              {'\n'}
              Number of people:
              {' '}
              {selectedRoom.no_of_people}
              {'\n'}
              Type:
              {' '}
              {selectedRoom.type}
              {'\n'}
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => confirmReservation()}>Confirm reservation</Button>
          </Card.Actions>
        </Card>
      )}
    </View>
  );
}

export default MakeReservation;
