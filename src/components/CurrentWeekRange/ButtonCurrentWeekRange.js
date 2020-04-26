import React from "react";
import styles from "./ButtonCurrentWeekRange.module.css";
import {NavLink} from 'react-router-dom'

const ButtonCurrentWeekRange = () => {
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>На сьогодні завдань немає</h2>
      <NavLink to="/contact-us">
      <button type="button" className={styles.button}>
        Запланувати нові задачі
      </button>
      </NavLink>
    </div>
  );
};

export default ButtonCurrentWeekRange;
