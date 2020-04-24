import React from "react";
import styles from "./ButtonCurrentWeekRange.module.css";

const ButtonCurrentWeekRange = () => {
  const andWhat = () => {
    alert("а шо дальше?");
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>На сьогодні завдань немає</h2>
      {/* <SomeLink to="/some"> */}
      <button onClick={andWhat} type="button" className={styles.button}>
        Запланувати нові задачі
      </button>
      {/* </SomeLink> */}
    </div>
  );
};

export default ButtonCurrentWeekRange;
