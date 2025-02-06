import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    localStorage.setItem("selectedDate", date.toISOString().split("T")[0]);
    setSelectedDate(newDate);
  };

  return (
    <div className="pt-16">
      <h2>Pick a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={date} // This ensures that the calendar displays the current selected date
      />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
