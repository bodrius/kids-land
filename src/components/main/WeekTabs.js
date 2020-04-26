import React from "react";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
// import { days } from "./days";
import styles from "./WeekTabs.module.css";

export const WeekTabs = ({ days, choosenDay, choosePlannedDay }) => {
  // console.log("choosenDay, day", choosenDay);
  // console.log("days", days);
  const selectedDayStyle = days.selected ? styles.activeItem : styles.item;

  return (
    <nav className={styles.weektabs}>
      <h3>Дні тижня</h3>
      <ul>
        {days.map((day) => (
          <li
            key={day.id}
            onClick={() => choosePlannedDay(day.label)}
            className={selectedDayStyle}
          >
            {day.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
