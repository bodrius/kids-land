import React from "react";

import styles from "./WeekTabs.module.css";

export const WeekTabs = ({ days, choosenDay }) => {
  const selectedDayStyle = styles.selected ? styles.activeItem : styles.item;

  return (
    <nav className={styles.weektabs}>
      {days.map((day) => (
        <div key={day.id} className={selectedDayStyle}>
          {window.innerWidth <= 768 && (
            <li key={day.id} onClick={() => choosenDay(day.id)}>
              {day.shortLabel}
            </li>
          )}
          {window.innerWidth > 768 && window.innerWidth <= 1199 && (
            <li key={day.id} onClick={() => choosenDay(day.id)}>
              {day.shortLabel}
            </li>
          )}

          {window.innerWidth >= 1200 && (
            <li
              key={day.id}
              onClick={() => {
                choosenDay(day.id);
              }}
            >
              {day.label}
            </li>
          )}
        </div>
      ))}
    </nav>
  );
};
