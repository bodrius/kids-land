import React from "react";
import styles from "./WeekTabContent.module.css";
import progressBar from "./images/pict--progress-bar-controls-vector-stencils-library.png";
import defaultImgTask from "./images/plan_img/1.jpg";
// import { CurrentWeekRange } from "./ path / CurrentWeekRange";
// import { CurrentDay } from "./ path / CurrentDay";
// import { ProgressBar } from "./ path / ProgressBar";
// import { CardList } from "./ path / CardList";

export const WeekTabContent = () => {
  //   const selectedDayStyle = days.selected ? styles.activeItem : styles.item;

  return (

    <div className={styles.container}>
      {/* ====== CurrentWeekRange ======== */}
      <div className={styles.currentWeekRange}>
        <p>Тиждень: 07-13 жовтня</p>
      </div>

      <div className={styles.mainHeader}>
        {/* ========= CurrentDay ========== */}
        <div>
          <span>Мої завдання</span>
          <span>СЕРЕДА, 09.10.2019</span>
        </div>

        {/* ========= ProgressBar ========== */}
        <div>
          <p>Набрано балів:</p>
          <span>400 / 810</span>
          <img src={progressBar} width="254px" alt="progress in task doing" />
        </div>
      </div>

      {/* ========= CardList ========== */}
      <ul className={styles.cardList}>
        <li key="1">
          <img
            src={defaultImgTask}
            width="280px"
            height="200px"
            alt="task title"
          />
          <span>Застелити ліжко</span>
          <span>3 бали</span>
        </li>
        <li key="2">
          <img
            src={defaultImgTask}
            width="280px"
            height="200px"
            alt="task title"
          />
          <span>Застелити ліжко</span>
          <span>3 бали</span>
        </li>
        <li key="3">
          <img
            src={defaultImgTask}
            width="280px"
            height="200px"
            alt="task title"
          />
          <span>Застелити ліжко</span>
          <span>3 бали</span>
        </li>
        <li key="4">
          <img
            src={defaultImgTask}
            width="280px"
            height="200px"
            alt="task title"
          />
          <span>Застелити ліжко</span>
          <span>3 бали</span>
        </li>
        <li key="5">
          <img
            src={defaultImgTask}
            width="280px"
            height="200px"
            alt="task title"
          />
          <span>Застелити ліжко</span>
          <span>3 бали</span>
        </li>
        <li key="6">
          <img
            src={defaultImgTask}
            width="280px"
            height="200px"
            alt="task title"
          />
          <span>Застелити ліжко</span>
          <span>3 бали</span>
        </li>
      </ul>
    </div>
  );
};
