import React from 'react';
import {
  StyleSheet, ImageBackground, View, TouchableOpacity, Text,
} from 'react-native';

const backgroundImage = require('../../../../assets/home.jpg');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fixToEnd: {
    position: 'absolute',
    width: 100,
    height: 50,
    bottom: 0,
  },
  inputText: {
    color: 'white',
  },
  defaultMessage: {
    color: '#274650',
    justifyContent: 'center',
    fontSize: 20,
    height: 80,
    lineHeight: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1F3B3F',
    borderRadius: 25,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  aboutUs: {
    borderRadius: 25,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  aboutText: {
    color: 'black',
  },
});

const HomeScreen = ({ navigation }) => (
  <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.fixToText}>

      <Text style={styles.defaultMessage}>
        Welcome to HotelHub! Start by signing into your account or creating a new one.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateAccount')}
        style={styles.button}
      >
        <Text style={styles.inputText}>
          Sign up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        <Text style={styles.inputText}>
          Log in
        </Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      onPress={() => navigation.navigate('AboutUs')}
    >
      <Text style={styles.aboutText}>
        @ About us
      </Text>
    </TouchableOpacity>
  </ImageBackground>
);

export default HomeScreen;
