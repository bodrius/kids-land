import React from "react";
import styles from "./WeekTabContent.module.css";
import CurrentWeekRange from "../currentDay/CurrentWeekRange";
import CurrentDay from "../currentDay/CurrentDay";
import ProgressBar from "../progressBar/ProgressBar";
import CardListUl from "../cardList/CardListUl";
import DefaultPage from "./../mainPage/defaultPage/DefaultPage";
import { WeekTabs } from "./WeekTabs";
import { useSelector } from "react-redux";

export const WeekTabContent = ({
  tasks,
  fullDate,
  dayLabel,
  days,
  totalPoints,
  today,
  choosenDay,
  detect,
  setTotalPoints
}) => {
  const { weekPoints } = useSelector((state) => state.user);
  return (
    <div className={styles.container}>
      {window.innerWidth < 768 && (
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
                <CardListUl setTotalPoints={setTotalPoints} dayLabel={dayLabel} cardList={tasks} />
              ) : (
                <DefaultPage />
              )}
            </div>
            <div>
              <ProgressBar userPoints={totalPoints} weekPoints={weekPoints} />
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
            <ProgressBar userPoints={totalPoints} weekPoints={weekPoints} />
          </div>
          <div className={styles.mainHeader}>
            <CurrentDay days={dayLabel} date={fullDate} />
          </div>
          <div className={styles.cardList}>
            {detect.length ? (
              <CardListUl setTotalPoints={setTotalPoints} dayLabel={dayLabel} cardList={tasks} />
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
              <ProgressBar userPoints={totalPoints} weekPoints={weekPoints} />
            </div>
          </div>
          <div className={styles.cardList}>
            {detect.length ? (
              <CardListUl setTotalPoints={setTotalPoints} dayLabel={dayLabel} cardList={tasks} />
            ) : (
              <DefaultPage />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
