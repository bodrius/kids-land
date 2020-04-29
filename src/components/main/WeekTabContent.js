import React, { useState } from "react";
import styles from "./WeekTabContent.module.css";
// import progressBar from "./images/pict--progress-bar-controls-vector-stencils-library.png";
// import defaultImgTask from "./images/plan_img/1.jpg";
import CurrentWeekRange from "../currentDay/CurrentWeekRange";
import CurrentDay from "../currentDay/CurrentDay";
import ProgressBar from "../progressBar/ProgressBar";
import CardListUl from "../cardList/CardListUl";
import DefaultPage from "./../mainPage/defaultPage/DefaultPage";
import { WeekTabs } from "./WeekTabs";

export const WeekTabContent = ({
  tasks,
  fullDate,
  dayLabel,
  selectDay,
  days,
}) => {
  return (
    <div className={styles.container}>
      {window.innerWidth < 769 && (
        <div>
          <div className={styles.currentWeekRange}>
            <CurrentWeekRange />
          </div>
          <div className={styles.mainHeader}>
            <CurrentDay days={dayLabel} date={fullDate} />
          </div>
          <div className={styles.cardList}>
            {tasks.length ? <CardListUl cardList={tasks} /> : <DefaultPage />}
          </div>
          <div>
            <ProgressBar />
          </div>
        </div>
      )}
      {window.innerWidth >= 770 && window.innerWidth <= 1199 && (
        <div>
          <div className={styles.weekTabsPlusWeekRange}>
            <CurrentWeekRange className={styles.currentWeekRange} />
            <WeekTabs choosenDay={selectDay} days={days} />
          </div>
          <div>
            <ProgressBar />
          </div>
          <div className={styles.mainHeader}>
              <CurrentDay days={dayLabel} date={fullDate} />
          </div>
          <div className={styles.cardList}>
            {tasks.length ? <CardListUl cardList={tasks} /> : <DefaultPage />}
          </div>
        </div>
      )}
      {window.innerWidth > 1199 && (
        <div>
          <div className={styles.currentWeekRange}>
            <CurrentWeekRange />
          </div>
          <div className={styles.mainHeader}>
            <div>
              <CurrentDay days={dayLabel} date={fullDate} />
            </div>
            <div>
              <ProgressBar />
            </div>
          </div>
          <div className={styles.cardList}>
            {tasks.length ? <CardListUl cardList={tasks} /> : <DefaultPage />}
          </div>
        </div>
      )}
    </div>
  );
};
