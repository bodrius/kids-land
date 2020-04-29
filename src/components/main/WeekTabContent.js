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
import DefaultPage from './../mainPage/defaultPage/DefaultPage';

export const WeekTabContent = ({ tasks, fullDate, dayLabel, totalPoints, planingPoints}) => {
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
      <div className={styles.currentWeekRange}>
        <CurrentWeekRange />
        {/* <ButtonCurrentWeekRange /> */}
      </div>
      <div className={styles.mainHeader}>
        <div>
          <CurrentDay days={dayLabel} date={fullDate}/>
        </div>
        <div>
          <ProgressBar userPoints={totalPoints}  weekPoints={planingPoints}/>
        </div>
      </div>
      <div className={styles.cardList}>
      {tasks.length ? (<CardListUl cardList={tasks} />): (<DefaultPage/>)}
      
      </div>

    </div>
  );
};
