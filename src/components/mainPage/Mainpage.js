import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/uk";
import s from "./MainPage.module.css";
import { WeekTabs } from "../main/WeekTabs";
import { services } from "../../services/services";
import { WeekTabContent } from "../main/WeekTabContent";

const days = [
  { id: 1, label: "Понеділок", title: "Пн", selected: false },
  { id: 2, label: "Вівторок", title: "Вт", selected: false },
  { id: 3, label: "Середа", title: "Ср", selected: false },
  { id: 4, label: "Четвер", title: "Чт", selected: false },
  { id: 5, label: "П'ятниця", title: "Пт", selected: false },
  { id: 6, label: "Субота", title: "Сб", selected: false },
  { id: 7, label: "Неділя", title: "Нд", selected: false },
];

const windowWidth = document.documentElement.clientWidth;
const setMainPath = () => {
  const weekDay = moment().format("dddd");
  days.map((day) =>
    day.label === weekDay
      ? { ...day, selected: true }
      : { ...day, selected: false }
  );
  return days;
};

const today = moment().format("dddd");
const date = moment().format("L");

const selectDay = (choosenDay) => {
  days.map((day) =>
    day.id === choosenDay ? (day.selected = true) : (day.selected = false)
  );
  return days;
};

const MainPage = () => {
  const { userToken, userTasks } = useSelector((state) => state.user);
  const [updatedDay, setUpdatedDay] = useState({});
  // const userToken = useSelector((state) => state.user.userToken);

  // console.log("userToken ------->", userToken);
  // console.log("userTasks", userTasks);

  const [tasks, setTasks] = useState([]);
  console.log("tasks --->!", tasks);
  const day = setMainPath();
  const history = useHistory();

  useEffect(() => {
    history.push(day);
  }, [day, history]);

  useEffect(() => {
    // services
    //   .getCurrentUser(userToken)
    //   .then((data) => setTasks(data.data.user.tasks));
    setTasks(userTasks);
  }, [userTasks]);

  // services
  //   .userSignIn({
  //     email: "test666@test",
  //     password: "qwerty",
  //   })
  //   .then((data) => {
  //     console.log("data", data);
  //     return setTasks(data.data.user.tasks);
  //   });

  const choosePlannedDay = (dayLabel) => {
    console.log("Click on Planned day", dayLabel);
    const updatedDay = days.map((day) =>
      day.label === dayLabel
        ? { ...day, selected: true }
        : { ...day, selected: false }
    );
    console.log("updatedDay???", updatedDay);
    // ActualTasks(updatedDay);
    return setUpdatedDay(updatedDay);
  };

  // const ActualTasks = (updatedDay) => {
  //   console.log("tasks ((((", tasks);
  //   console.log("updatedDay ((((", updatedDay);
  //   return null;
  //   // const tasksToFulfill = tasks.filter((currentTask) =>
  //   //   console.log("tasks ((((", tasks) ||
  //   //   currentTask.days.title === updatedDay.title
  //   //     ? currentTask
  //   //     : null
  //   // );
  //   // console.log("tasksToFulfill", tasksToFulfill);
  //   // return tasksToFulfill;
  // };

  return (
    <div>
      {/* {console.log("ActualTasks ---->", ActualTasks)} */}
      <div className={s.mainDiv}>
        {windowWidth < 768 && (
          <WeekTabs choosenDay={selectDay()} days={setMainPath()} />
        )}
        {windowWidth >= 769 && windowWidth < 1200 && (
          <WeekTabs
            choosenDay={selectDay()}
            days={setMainPath()}
            choosePlannedDay={choosePlannedDay}
          />
        )}
      </div>
      <div>
        <WeekTabContent tasks={tasks} today={today} date={date} />
      </div>
    </div>
  );
};

export default MainPage;
