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

const MakeReservation = () => {
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
