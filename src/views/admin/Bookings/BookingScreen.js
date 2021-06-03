import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, TouchableOpacity, Text, Platform,
} from 'react-native';
import {
  Card, Paragraph, Button,
} from 'react-native-paper';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Playfair',
    paddingBottom: 50,
    marginBottom: 30,
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

const Bookings = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [bookings, setBookings] = useState(false);

  function getBookings() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        hotel_id: user.hotel_admin,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/bookings/hotel/not_confirmed', options)
      .then((response) => {
        const rawBookings = response.data;
        console.log(response.data);

        const promises = rawBookings.map((booking) => {
          const roomOptions = {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            params: {
              room_id: booking.room_id,
            },
          };
          return axios.get('https://hotelhubip.herokuapp.com/bookings/rooms/get', roomOptions);
        });
        Promise.all(promises).then((rooms) => {
          const finalBookings = [];
          let i;
          for (i = 0; i < rooms.length; i += 1) {
            finalBookings.push({ ...rawBookings[i], ...rooms[i].data });
          }

          setBookings(finalBookings);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function approveBooking(booking) {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        booking_id: booking.booking_id,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/admin/booking/approve', options)
      .then((response) => {
        console.log(response.data);
        getBookings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function declineBooking(booking) {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        booking_id: booking.booking_id,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/admin/booking/cancel', options)
      .then((response) => {
        console.log(response.data);
        getBookings();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (bookings === false) {
    getBookings();
  }

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
      <View>

        {/* room list */}
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.booking_id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card>
                <Card.Title title={`Room ${item.name}`} />
                <Card.Content>
                  <Paragraph>
                    {item.room_id}
                    {'\n'}
                    Booking start date:
                    {' '}
                    {new Date(item.start_date).toString()}
                    {'\n\n'}
                    Booking end date:
                    {' '}
                    {new Date(item.end_date).toString()}
                    {'\n'}
                  </Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={() => approveBooking(item)}>Approve Booking</Button>
                  <Button onPress={() => declineBooking(item)}>Delete Booking</Button>
                </Card.Actions>
              </Card>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Bookings;
