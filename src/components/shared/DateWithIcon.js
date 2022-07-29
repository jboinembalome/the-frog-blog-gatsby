import { Calendar } from "react-feather";
import React from "react";

const DateWithIcon = ({ date }) => (
  <div className="flex items-center">
    <Calendar />
    <time className="p-1" dateTime={date}>
      {date}
    </time>
  </div>
);

export default DateWithIcon;
