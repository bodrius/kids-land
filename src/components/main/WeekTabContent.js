import React, { useState } from "react";
import styles from "./WeekTabContent.module.css";
// import progressBar from "./images/pict--progress-bar-controls-vector-stencils-library.png";
// import defaultImgTask from "./images/plan_img/1.jpg";
import CurrentWeekRange from "../currentDay/CurrentWeekRange";
import CurrentDay from "../currentDay/CurrentDay";
import ProgressBar from "../progressBar/ProgressBar";
import CardListUl from "../cardList/CardListUl";
import ButtonCurrentWeekRange from "../CurrentWeekRange/ButtonCurrentWeekRange";
// import { CurrentDay } from "./";
// import { ProgressBar } from "./ path / ProgressBar";
// import { CardList } from "./ path / CardList";

export const WeekTabContent = ({ tasks }) => {
  // const [tasks, setTasks] = useState([]);
console.log('tasks', tasks)
  //   const selectedDayStyle = days.selected ? styles.activeItem : styles.item;

  // const selectedDayStyle = days.selected ? styles.activeItem : styles.item;

  // services
  //   .userSignIn({
  //     email: "test666@test",
  //     password: "qwerty",
  //   })
  //   .then((data) => {
  //     console.log("data", data);
  //     return setTasks(data.data.user.tasks);
  //   });

  return (
    <div className={styles.container}>
      {/* ====== CurrentWeekRange ======== */}
      <div className={styles.currentWeekRange}>
        <CurrentWeekRange />
        <ButtonCurrentWeekRange />
        
      </div>

      <div className={styles.mainHeader}>
        {/* ========= CurrentDay ========== */}
        <div>
          <CurrentDay />
        </div>

        {/* ========= ProgressBar ========== */}
        <div>
          <ProgressBar />
          {/* <p>Набрано балів:</p>
          <span>400 / 810</span>
          <img src={progressBar} width="254px" alt="progress in task doing" /> */}
        </div>
      </div>

      {/* ========= CardList ========== */}
      <ul className={styles.cardList}>
        <CardListUl cardList={tasks} />
        {/* <li key="1">
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
        </li> */}
      </ul>
    </div>
  );
};
