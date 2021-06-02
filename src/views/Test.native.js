import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Text,
} from 'react-native';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function TestWeb() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <Text>hello fa</Text>
    // {/* <DateRangePicker
    //   onChange={onChange}
    //   value={value}
    // /> */}
  );
}

export default TestWeb;
