import React from "react";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
// import { days } from "./days";
import styles from "./WeekTabs.module.css";

export const WeekTabs = ({ days, choosenDay }) => {
  // console.log("data--->", data);
  console.log("choosenDay, day", choosenDay);
  console.log("days", days);
  const selectedDayStyle = days.selected ? styles.activeItem : styles.item;

  return (
    <nav className={styles.weektabs}>
      <h3>Дні тижня</h3>
      {days.map((day) => (
        <div key={day.id} className={selectedDayStyle}>
          <li key={day.id}>{day.label}</li>
        </div>
      ))}
    </nav>
  );
};
