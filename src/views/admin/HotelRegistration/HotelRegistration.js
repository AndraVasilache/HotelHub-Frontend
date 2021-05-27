import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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

const HotelRegistration = ({ route, navigation }) => {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  const [hotel, setHotel] = useState({
    location: '', name: '', photo: '', id: '',
  });

  const [incorrectRegistration, setIncorrectRegistration] = useState(false);

  function registration() {
    const registerOptions = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      params: { user_id: user.user_id },
    };

    axios.post('https://hotelhubip.herokuapp.com/admin/actions/hotel/add',
      hotel, registerOptions)
      .then((response) => {
        if (response.data === false) {
          setIncorrectRegistration(true);
          return;
        }

        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={40}
    >
      <View style={styles.containerView}>
        <Text>
          You have no hotel registered.
          {'\n'}
          Please regiter your hotel.
        </Text>
        <TextInput
          style={styles.input}
          label="Name"
          value={hotel.name}
          onChangeText={(name) => setHotel({ ...hotel, name })}
        />

        <TextInput
          style={styles.input}
          label="Location"
          value={hotel.location}
          onChangeText={(location) => setHotel({ ...hotel, location })}
        />

        <HelperText type="error" visible={incorrectRegistration}>
          Name at given location is taken!
        </HelperText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => registration()}
        >
          <Text style={styles.inputText}>
            Register hotel
          </Text>
        </TouchableOpacity>

      </View>

    </KeyboardAwareScrollView>
  );
};

export default HotelRegistration;
