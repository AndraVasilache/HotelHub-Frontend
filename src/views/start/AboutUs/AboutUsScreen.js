import React from 'react';
import {
  StyleSheet, ImageBackground, ScrollView, Text, Platform,
} from 'react-native';

const backgroundImage = require('../../../../assets/aboutUsBackground.jpg');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  textContainer: {
    padding: Platform.OS === 'android' ? 50 : 10,
    paddingTop: Platform.OS === 'android' ? 5 : 50,
    width: Platform.OS === 'android' ? '100%' : '70%',
    paddingBottom: 200,
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    textAlign: Platform.OS === 'android' ? 'center' : 'center',
    fontSize: Platform.OS === 'android' ? 16 : 20,
    paddingBottom: Platform.OS === 'android' ? 15 : 50,
    fontFamily: 'Playfair',
  },
});

const AboutUsScreen = () => (
  <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <ScrollView style={styles.textContainer}>
      <Text style={styles.text}>
        HotelHub este o aplicație care vine atât în sprijinul managerilor,
        cât și în sprijinul clienților unui lanț hotelier care vor să închirieze,
        managerieze și să documenteze (sau să se documenteze) asupra diverselor
        facilități ale locațiilor disponibile.
        {' \n\n'}
        Aplicația permite angajaților hotelului să vadă și să administreze rezervările
        clienților,să adauge camere și locații, dar și să modifice facilitățile oferite
        de un anumit tip de camera sau de către un anumit hotel.
        {' \n\n'}
        Utilizatorii neprivilegiați ai aplicației (clienții) pot alege în care dintre
        locațiile lanțului hotelier doresc sa meargă și să facă o rezervare,
        pot vedea alte facilități oferite de hotelul ales și pot verifica disponibilitatea
        unui tip de cameră pentru o perioadă
        selectată.
      </Text>
    </ScrollView>
  </ImageBackground>
);

export default AboutUsScreen;
