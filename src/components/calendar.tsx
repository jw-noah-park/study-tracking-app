import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = () => {
  return (
    <div>
      <DatePicker
        selected={null} 
        onChange={() => {}} 
        dateFormat="yyyy-MM-dd"
        inline 
      />
    </div>
  );
};

export default CalendarComponent;