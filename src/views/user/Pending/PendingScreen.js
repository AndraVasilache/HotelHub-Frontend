import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Platform, TouchableOpacity, Text,
} from 'react-native';
import {
  Card, Paragraph,
} from 'react-native-paper';
import axios from 'axios';

const styles = StyleSheet.create({
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

    axios.get('https://hotelhubip.herokuapp.com/bookings/user/pending', options)
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
                <Card.Title title="Reservation" />
                <Card.Content>
                  <Paragraph>
                    {'\n'}
                    Your reservation is yet to be approved!
                    {'\n\n'}
                    Start date:
                    {new Date(item.start_date).toString()}
                    {'.\n\n'}
                    End date:
                    {' '}
                    {new Date(item.end_date).toString()}
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
