import React from "react";
import * as moment from "moment";
import "moment/locale/uk";
import styles from "./CurrentWeekPlaning.module.css";

const CurrentWeekPlaning = () => {
  const startOfWeek = moment().startOf("week").format("DD");
  const endOfWeek = moment().endOf("week").format("DD.MM.YYYY");

  return (
    <>
      <p className={styles.wrapper}>
        План на тиждень:
        <span className={styles.week}>
          {" "}
          {startOfWeek} - {endOfWeek}{" "}
          <img 
          className={styles.arrowDown}
            src={require("../../assets/image/icon/down/arrow_drop_down-24px.svg")}
            alt="arrow down"
          />
        </span>
      </p>
    </>
  );
};

export default CurrentWeekPlaning;

//need show in planing rout section
