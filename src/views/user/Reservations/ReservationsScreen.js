import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Platform, TouchableOpacity,
} from 'react-native';
import {
  Card, Paragraph, Button,
} from 'react-native-paper';
import axios from 'axios';

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
  },
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
});

const Reservations = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [bookings, setBookings] = useState(false);

  function getBookings() {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: {
        hotel_id: user.user_id,
      },
    };

    axios.get('https://hotelhubip.herokuapp.com/bookings/user/confirmed', options)
      .then((response) => {
        setBookings(response.data);
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
        Open drawer
      </TouchableOpacity>
      <View>

        {/* room list */}
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.booking_id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card>
                <Card.Title title={item.user_id} />
                <Card.Content>
                  <Paragraph>
                    {'\n'}
                    start_date:
                    {' '}
                    {item.start_date}
                    {'\n'}
                    end_date:
                    {' '}
                    {item.end_date}
                    {'\n'}
                  </Paragraph>
                </Card.Content>
              </Card>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Reservations;

