import React from 'react'
import styles from './CurrentWeekRange.module.css'

export const CurrentWeekRange = () => {
    return (
      <div className={styles.wrapper}>
          <h3 className={styles.title}>На сьогодні завдань немає</h3>
        <button className={styles.button}>Запланувати нові задачі</button>
      </div>
    );
  };