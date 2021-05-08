import React from 'react';
import {
  StyleSheet, ImageBackground, View, Text,
} from 'react-native';

const backgroundImage = require('../../../assets/home.jpg');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AboutUsScreen = () => (
  <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View>
      <Text>
        HotelHub is a platform
      </Text>
    </View>
  </ImageBackground>
);

export default AboutUsScreen;
