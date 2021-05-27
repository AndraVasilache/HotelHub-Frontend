import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';
import DateRangePicker from 'react-native-daterange-picker';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// eslint-disable-next-line camelcase
let hotel_id;

let user;

const MakeReservation = ({ route }) => {
  // eslint-disable-next-line camelcase
  hotel_id = (route.params && route.params.hotel_id) ? route.params.hotel_id : '';
  user = (route && route.params && route.params.user) ? route.params.user : { email: '', password: '' };

  console.log(hotel_id);
  console.log(user);

  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
    displayedDate: moment(),
  });

  return (
    <View style={styles.container}>
      <DateRangePicker
        onChange={(newDate) => console.log(newDate)}
        endDate={dates.endDate}
        startDate={dates.startDate}
        displayedDate={dates.displayedDate}
        range
      >
        <Text>Click me!</Text>
      </DateRangePicker>
    </View>
  );
};

export default MakeReservation;
