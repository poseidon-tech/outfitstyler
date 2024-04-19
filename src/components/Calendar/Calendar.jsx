import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns'; // Assuming you want to use date-fns for date compariso
import UpcomingEventsBox from '../Upcoming Events/Upcoming';
import WeatherForecastBox from '../weather/weather';
const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const in3Days = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
const in5Days = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

const datesToAddContentTo = [tomorrow, in3Days, in5Days];

function tileContent({ date, view }) {
  // Define a mapping of dates to content and colors
  const contentMap = {
    [tomorrow.toDateString()]: { content: "Meeting", color: "blue" },
    [in3Days.toDateString()]: { content: "Maths", color: "green" },
    [in5Days.toDateString()]: { content: "Renovation", color: "red" },
  };

  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      const { content, color } = contentMap[date.toDateString()] || { content: "", color: "black" }; // Get content and color for the date, default to black if not found
      return (
        <div className="custom-tile-content">
          <div className="content-bottom" style={{ color }}>{content}</div>
        </div>
      );
    }
  }
}

function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };

  return (
    <div className="c2">
    <Calendar
      onChange={onChange}
      value={value}
      tileContent={tileContent}
    />
    <UpcomingEventsBox/>
    <br></br>
    <WeatherForecastBox/>
    </div>
  );
}
export default CustomCalendar