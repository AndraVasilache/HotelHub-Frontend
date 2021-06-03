import * as React from 'react';
import {
  View, Button, StyleSheet, Text,
} from 'react-native';

const styles = StyleSheet.create({
  fontTest: {
    fontFamily: 'Precious',
    textAlign: 'center',
    fontSize: 30,
  },
  fontTest2: {
    fontFamily: 'Playfair',
    textAlign: 'center',
    fontSize: 30,
  },
});

const DebugScreen = ({ navigation }) => (
  <View>
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

    <Button
      title="UserHome"
      onPress={() => navigation.navigate('UserHome')}
    />

    <Button
      title="Hotels"
      onPress={() => navigation.navigate('Hotels')}
    />

  </View>
);

export default DebugScreen;
