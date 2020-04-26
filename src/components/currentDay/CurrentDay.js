import React from "react";
import styles from "./CurrentDay.module.css";

const CurrentDay = ({ days, date }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.task}>Мoї завдання:</h2>
      <p className={styles.day}>
        {`${days}`}, {`${date}`}
        {/* Вівторок, 06.04.2020 */}
      </p>
    </div>
  );
};

export default CurrentDay;

{/* <CurrentWeekRange/>
<CurrentDay/>
<ButtonCurrentWeekRange/>
<CurrentWeekPlaning/> */}

// import CurrentWeekPlaning from '../currentDay/CurrentWeekPlaning'
// import CurrentDay from '../currentDay/CurrentDay'
// import CurrentWeekRange from '../currentDay/CurrentWeekRange'
// import ButtonCurrentWeekRange from '../CurrentWeekRange/ButtonCurrentWeekRange'