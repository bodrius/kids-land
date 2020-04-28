import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./MainPage.module.css";
import moment from "moment";
import { WeekTabs } from "../main/WeekTabs";
import { services } from "../../services/services";
import { WeekTabContent } from "../main/WeekTabContent";
import "moment/locale/uk";

const days = [
  { id: 1, label: "Понеділок", name: "monday", selected: false,  },
  { id: 2, label: "Вівторок", name: "tuesday", selected: false },
  { id: 3, label: "Середа", name: "wednesday", selected: false },
  { id: 4, label: "Четвер", name: "thursday", selected: false },
  { id: 5, label: "П'ятниця", name: "friday", selected: false },
  { id: 6, label: "Субота", name: "Saturday", selected: false },
  { id: 7, label: "Неділя", name: "Sunday", selected: false },
];

const windowWidth = document.documentElement.clientWidth;
const setMainPath = () => {
  const weekDay = moment().get("day");
  days.map((day) =>
    day.id === weekDay ? (day.selected = true) : (day.selected = false)
  );
  console.log("days", days);
  return days;
};

const MainPage = () => {
  const { userToken, userTasks } = useSelector((state) => state.user);

  const [tasks, setTasks] = useState([]);
  const [dayLabel, setDayLabel] = useState(moment().format("dddd"));
  const [fullDate, setFullDate] = useState(moment().format("L"));

  const day = setMainPath();
  const history = useHistory();

  useEffect(() => {
    history.push(day);
  }, [day, history]);

  useEffect(() => {
    const dayId = days.find((day) =>
      day.label.toLowerCase() === dayLabel.toLowerCase() ? day.id : null
    );
    console.log("dayId", dayId.id);

    selectDay(dayId.id);
  }, []);

  const selectDay = (id) => {
    const currentDayForImage = days.find((day) => day.id === id);
    const res = services.getCurrentUser(userToken).then((data) => {
      const result = data.data.user.tasks.map((task) => ({
        title: task.title,
        points: task.taskPoints,
        imgName: task.imgName,
        date: task.date,
        days: [
          task.days.filter(
            (task) => task.isActive && task.name === currentDayForImage.name
          ),
        ],
      }));
      console.log('result---------->', result)
      const resultforFilter = result.filter(
        (activeDay) => activeDay.days[0].length,
      );
      // const dateOffTask = resultforFilter.find((activeDay) => activeDay.days[0].date)
      // console.log('resultforFilter', resultforFilter)
      // const dateOffTask = resultforFilter[0].days[0][0].date
      // console.log('dateOffTask', dateOffTask)
      // setFullDate(moment(dateOffTask).format("L"));

      setTasks(resultforFilter);
    });
    console.log("currentDayForImage", currentDayForImage);
    setDayLabel(currentDayForImage.label);
    // setFullDate(currentDayForImage.dayDate);
    console.log("Some date----->", currentDayForImage.dayDate);

    return currentDayForImage.name;
  };

  return (
    <div className={s.container}>
      <WeekTabs choosenDay={selectDay} days={setMainPath()} />
      <WeekTabContent dayLabel={dayLabel} tasks={tasks} fullDate={fullDate} />
    </div>
  );
};
export default MainPage;
