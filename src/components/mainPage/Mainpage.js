import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./MainPage.module.css";
import moment from "moment";
import { WeekTabs } from "../main/WeekTabs";
import { services } from "../../services/services";
import { WeekTabContent } from "../main/WeekTabContent";

const days = [
  { id: 1, label: "Понеділок", selected: false },
  { id: 2, label: "Вівторок", selected: false },
  { id: 3, label: "Середа", selected: false },
  { id: 4, label: "Четвер", selected: false },
  { id: 5, label: "П'ятниця", selected: false },
  { id: 6, label: "Субота", selected: false },
  { id: 7, label: "Неділя", selected: false },
];

const windowWidth = document.documentElement.clientWidth;
const setMainPath = () => {
  const weekDay = moment().get("day");
  days.map((day) =>
    day.id === weekDay ? (day.selected = true) : (day.selected = false)
  );
  return days;
};

const selectDay = (choosenDay) => {
  days.map((day) =>
    day.id === choosenDay ? (day.selected = true) : (day.selected = false)
  );
  return days;
};

 const MainPage = () => {
  // console.log('tasks', user.tasks)
  const userToken = useSelector((state) => state.user.userToken);
  console.log("userToken ------->", userToken);

  const [tasks, setTasks] = useState([]);
  console.log("tasks --->!", tasks);
  const day = setMainPath();
  const history = useHistory();

  useEffect(() => {
    history.push(day);
  }, [day, history]);

  // useEffect(() => {
  //   services
  //     .getCurrentUser(userToken)
  //     .then((data) => setTasks(data.data.user.tasks));
  // }, []);

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
    <div>
      <div className={s.mainDiv}>
        {windowWidth < 768 && (
          <WeekTabs choosenDay={selectDay()} days={setMainPath()} />
        )}
        {windowWidth >= 769 && windowWidth < 1200 && (
          <WeekTabs choosenDay={selectDay()} days={setMainPath()} />
        )}
      </div>

      <div>
        <WeekTabContent tasks={tasks} />
      </div>
    </div>
  );
};

export default MainPage;