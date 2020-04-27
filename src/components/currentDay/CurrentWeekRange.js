import React from "react";
import * as moment from "moment";
import styles from "./CurrentWeekRange.module.css";
import "moment/locale/uk";
const CurrentWeekRange = () => {
  const startOfWeek = moment().startOf("week").format("DD");
  const endOfWeek = moment().endOf("week").format("DD");
  function getThisMonth() {
    const monthes = [
      "сiчня",
      "лютого",
      "березеня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
    ];
    if (startOfWeek >= endOfWeek) {
      return monthes[moment().get("M") + 1];
    } else return monthes[moment().get("M")];
  }
  const month = getThisMonth(moment().get("M"));
  return (
    <div className={styles.wrapper}>
      <p className={styles.week}>
        Тиждень: {Number(startOfWeek)} - {Number(endOfWeek)} {month}
      </p>
    </div>
  );
};
export default CurrentWeekRange;
