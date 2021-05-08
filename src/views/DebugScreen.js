import * as React from 'react';
import { View, Button } from 'react-native';

const DebugScreen = ({ navigation }) => (
  <View>
    <Button
      title="StartScreen"
      onPress={() => navigation.navigation('Start')}
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
