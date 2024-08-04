import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timerID); // Clean up the interval on component unmount
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  return (
    <div className="clock-container">
      <div className="clock-text">
        <p>
          {formatDate(date)}, {date.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Clock;
