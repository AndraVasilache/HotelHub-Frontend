import React, { useState } from 'react';
import {
  StyleSheet, View, Button, Platform,
} from 'react-native';
import 'react-calendar/dist/Calendar.css';

if (Platform.OS === 'ios') {
  
  const DateRangePicker = require('@wojtekmaj/react-daterange-picker');
}
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function MakeReservation() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <View>
      {/* <DateRangePicker
        onChange={onChange}
        value={value}
      /> */}
    </View>
  );
}

export default MakeReservation;
