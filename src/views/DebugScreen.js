import * as React from 'react';
import {
  View, Button, StyleSheet, Text,
} from 'react-native';

const styles = StyleSheet.create({
  fontTest: {
    fontFamily: 'Itim_400Regular',
    textAlign: 'center',
    fontSize: 30,
  },
});

const DebugScreen = ({ navigation }) => (
  <View>
    <Text style={styles.fontTest}> Buna siua !</Text>
    <Button
      title="StartScreen"
      onPress={() => navigation.navigate('Start')}
    />

    <Button
      title="LoginScreen"
      onPress={() => navigation.navigate('Login')}
    />

    <Button
      title="AboutUsScreen"
      onPress={() => navigation.navigate('AboutUs')}
    />

    <Button
      title="SignUpScreen"
      onPress={() => navigation.navigate('CreateAccount')}
    />

    <Button
      title="MakeReservation"
      onPress={() => navigation.navigate('MakeReservation')}
    />
  </View>
);

export default DebugScreen;
