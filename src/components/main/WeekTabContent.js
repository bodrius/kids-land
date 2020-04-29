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
import moment from "moment";
export const WeekTabContent = ({
  tasks,
  fullDate,
  dayLabel,
  days,
  totalPoints,
  planingPoints,
  today,
  choosenDay,
  detect,
}) => {
  console.log("tasks", tasks);
  return (
    <div className={styles.container}>
      {window.innerWidth < 769 && (
        <div>
          <>
            <div className={styles.currentWeekRange}>
              <CurrentWeekRange />
            </div>
            <div className={styles.mainHeader}>
              <CurrentDay days={dayLabel} date={fullDate} />
            </div>
            <div className={styles.cardList}>
              {detect.length ? (
                <CardListUl dayLabel={dayLabel} cardList={tasks} />
              ) : (
                <DefaultPage />
              )}
            </div>
            <div>
              <ProgressBar
                userPoints={totalPoints}
                weekPoints={planingPoints}
              />
            </div>
          </>
        </div>
      )}
      {window.innerWidth >= 770 && window.innerWidth <= 1199 && (
        <div>
          <div className={styles.weekTabsPlusWeekRange}>
            <CurrentWeekRange className={styles.currentWeekRange} />
            <WeekTabs choosenDay={choosenDay} days={days} today={today} />
          </div>
          <div>
            <ProgressBar userPoints={totalPoints} weekPoints={planingPoints} />
          </div>
          <div className={styles.mainHeader}>
            <CurrentDay days={dayLabel} date={fullDate} />
          </div>
          <div className={styles.cardList}>
            {detect.length ? (
              <CardListUl dayLabel={dayLabel} cardList={tasks} />
            ) : (
              <DefaultPage />
            )}
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
              <ProgressBar
                userPoints={totalPoints}
                weekPoints={planingPoints}
              />
            </div>
          </div>
          <div className={styles.cardList}>
            {detect.length ? (
              <CardListUl dayLabel={dayLabel} cardList={tasks} />
            ) : (
              <DefaultPage />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
