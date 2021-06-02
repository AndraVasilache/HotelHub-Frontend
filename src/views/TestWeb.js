import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function TestWeb() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TestWeb;
