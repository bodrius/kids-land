import React from "react";
import * as moment from "moment";
import styles from "./CurrentWeekRange.module.css";

const CurrentWeekRange = () => {
  const startOfWeek = moment().startOf("week").format("DD");
  const endOfWeek = moment().endOf("week").format("DD");

  function getThisMonth() {
    const monthes = [
      "сiчня",
      "лютого",
      "березеня",
      "квiтня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересеня",
      "жовтня",
      "листопадя",
      "грудня",
    ];

    return monthes[moment().get("M")];
  }
  const month = getThisMonth(moment().get("M"));

  return (
    <div className={styles.wrapper}>
      <p className={styles.week}>
        Тиждень: {Number(startOfWeek)}-{Number(endOfWeek)} {month}
      </p>
    </div>
  );
};

export default CurrentWeekRange;
