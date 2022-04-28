import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Events/Date.css";

function DateSelector(props) {
  const [eventDate, setEventDate] = useState(new Date());

  const handleEventDateSelect = (date) => {
    setEventDate(date);
    props.onChangeDate(moment(date).format("LL"));
  };

  return (
    <div>
      <div className="input-container">
        <label>Select a date</label>
        <DatePicker
          selected={eventDate}
          onSelect={handleEventDateSelect}
        />
      </div>
    </div>
  );
}

export default DateSelector;
