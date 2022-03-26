import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const picker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <center>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yy"
        minDate={new Date()}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </center>
  );
};

export default picker;
