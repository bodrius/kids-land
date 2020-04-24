import React from "react";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
// import { days } from "./days";
import styles from "./WeekTabs.module.css";

// const getDay = (day) => {
//   console.log("day", day);
// };

export const WeekTabs = ({ days, choosenDay }) => {
  console.log("choosenDay, day", choosenDay);
  console.log("days Vaiaiaiai", days);
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
