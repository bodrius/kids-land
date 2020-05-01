import React from "react";
import styles from "./CurrentDay.module.css";
import "moment/locale/uk";


const CurrentDay = ({ days, date }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.task}>Мoї завдання:</h2>
      <p className={styles.day}>
        {`${days}`}, {`${date}`}
      </p>
    </div>
  );
};

export default CurrentDay;
