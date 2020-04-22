import React from 'react';
import styles from './CurrentWeek.module.css';

export const CurrentWeek = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.week}>
        Тиждень: 20-26 квітня
      </p>
    </div>
  );
};

