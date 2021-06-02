import React from 'react';
import {
  StyleSheet, ImageBackground, View, TouchableOpacity, Text, Platform,
} from 'react-native';

const backgroundImage = require('../../../../assets/startBackground.jpg');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    marginTop: Platform.OS === 'web' ? 80 : 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    color: 'white',
    fontFamily: 'Playfair',
    fontSize: Platform.OS === 'web' ? 20 : 15,
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
    fontFamily: 'Playfair',
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
