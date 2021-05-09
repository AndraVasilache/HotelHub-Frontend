import React from 'react';
import {
  StyleSheet, ImageBackground, View, Text, Platform,
} from 'react-native';

const backgroundImage = require('../../../assets/home.jpg');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 0 : 50,
    width: Platform.OS === 'android' ? '100%' : '70%',
    paddingBottom: 200,
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: Platform.OS === 'android' ? 'center' : 'flex-start',
  },
  text: {
    textAlign: 'center',
  },
  coordinatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginLeft: 20,
  },
  coordinatorText: {
    textAlign: 'left',
  },
});

const AboutUsScreen = () => (
  <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        HotelHub este o aplicație care vine atât în sprijinul managerilor,
        cât și în sprijinul clienților unui lanț hotelier care vor să închirieze,
        managerieze și să documenteze (sau să se documenteze) asupra diverselor
        facilități ale locațiilor disponibile.
        {' \n'}
        {' \n'}
        Aplicația permite angajaților hotelului să vadă și să administreze rezervările
        clienților,să adauge camere și locații, dar și să modifice facilitățile oferite
        de un anumit tip de camera sau de către un anumit hotel. Utilizatorii
        neprivilegiați ai aplicației (clienții) pot alege în care dintre locațiile lanțului
        hotelier doresc sa meargă și să facă o rezervare, pot vedea alte facilități oferite
        de hotelul ales și pot verifica disponibilitatea unui tip de cameră pentru o perioadă
        selectată.

      </Text>
    </View>

    <View style={styles.coordinatorContainer}>
      <Text style={styles.coordinatorText}>
        Grigore Lucian-Florin
        {' \n'}
        Olteanu Eduard-Florin
        {' \n'}
        Tanasă Ioan
        {' \n'}
        Vasilache Andra-Gabriela
      </Text>
    </View>
  </ImageBackground>
);

export default AboutUsScreen;
