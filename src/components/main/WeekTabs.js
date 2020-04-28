import React from "react";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
// import { days } from "./days";
import styles from "./WeekTabs.module.css";

export const WeekTabs = ({ today, days, choosenDay }) => {
  // console.log("data--->", data);
  console.log("days Vaiaiaiai", choosenDay);
  const selectedDayStyle = days.selected ? styles.activeItem : styles.item;
  return (
    <nav className={styles.weektabs}>
      {days.map((day) => (
        <div key={day.id} className={selectedDayStyle}>
          <li key={day.id} onClick={() => choosenDay(day.id)}>
            {day.label}
          </li>
        </div>
      ))}
    </nav>
  );
};
