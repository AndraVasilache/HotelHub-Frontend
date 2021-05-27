import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Bookings({ route, navigation }) {
  const user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };
  console.log(user);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Text>Bookings</Text>
    </View>
  );
}

export default Bookings;
