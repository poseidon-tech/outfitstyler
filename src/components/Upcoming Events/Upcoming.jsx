import React from 'react';
import './UpcomingEventsBox.css'; // Import the CSS file for styling

const UpcomingEventsBox = () => {
  // Hardcoded upcoming events with weather details
  const upcomingEvents = [
    { name: "Meeting", details: "Discuss project timelines", temperature: "25°C", weather: "Sunny" },
    { name: "Math class", details: "Algebra revision", temperature: "20°C", weather: "Partly cloudy" },
    { name: "Renovation", details: "Kitchen remodeling", temperature: "18°C", weather: "Rainy" },
  ];

  return (
    <div className="upcoming-events-box">
      <h2>Upcoming Events</h2>
      <ul>
        {upcomingEvents.map((event, index) => (
          <li key={index}>
            <strong>{event.name}</strong>: {event.details}
            <br />
            <span>Temperature: {event.temperature}</span>
            <br />
            <span>Weather: {event.weather}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEventsBox;
