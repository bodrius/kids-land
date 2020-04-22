import React from "react";
import styles from "./CurrentDay.module.css";
import { CurrentWeek } from "./currentWeek/CurrentWeek";

export const CurrentDay = ({ day, date }) => {


  return (
    <div>
        { window.innerWidth > 767 && window.innerWidth < 1199 ? !<CurrentWeek /> : <CurrentWeek />}
      <div className={styles.wrapper}>
        <h2 className={styles.task}>Мoї завдання:</h2>
        <p className={styles.day}>
          НЕДІЛЯ, 26-04-2020
           {/* {`${day}`}, {`${date}`} */}
           </p>
      </div>
    </div>
  );
};
