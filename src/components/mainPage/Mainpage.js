import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import s from "./MainPage.module.css";
import moment from "moment";
import { WeekTabs } from "../main/WeekTabs";
import { services } from "../../services/services";
import { WeekTabContent } from "../main/WeekTabContent";
import "moment/locale/uk";

let days = [
  {
    id: 1,
    label: "Понеділок",
    shortLabel: "Пн",
    name: "monday",
    selected: false,
  },
  {
    id: 2,
    label: "Вівторок",
    shortLabel: "Вт",
    name: "tuesday",
    selected: false,
  },
  {
    id: 3,
    label: "Середа",
    shortLabel: "Ср",
    name: "wednesday",
    selected: false,
  },
  {
    id: 4,
    label: "Четвер",
    shortLabel: "Чт",
    name: "thursday",
    selected: false,
  },
  {
    id: 5,
    label: "П'ятниця",
    shortLabel: "Пт",
    name: "friday",
    selected: false,
  },
  {
    id: 6,
    label: "Субота",
    shortLabel: "Сб",
    name: "saturday",
    selected: false,
  },
  { id: 7, label: "Неділя", shortLabel: "Нд", name: "sunday", selected: false },
];

const windowWidth = document.documentElement.clientWidth;
const setMainPath = () => {
  const weekDay = moment().get("day");
  days.map((day) =>
    day.id === weekDay ? (day.selected = true) : (day.selected = false)
  );

  return days;
};

const MainPage = () => {
  const { userToken, userTasks } = useSelector((state) => state.user);
  const [tasks, setTasks] = useState([]);
  const [dayLabel, setDayLabel] = useState(moment().format("dddd"));
  const [fullDate, setFullDate] = useState(moment().format("L"));
  const [planingPoints, setPlaningPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [detect, setDetect] = useState([]);
  const day = setMainPath();
  const history = useHistory();

console.log()

  useEffect(() => {
    history.push(day);
  }, [day, history]);

  // useEffect(() => {
  //   const dayId = days.find((day) =>
  //     day.label.toLowerCase() === dayLabel.toLowerCase() ? day.id : null
  //   );
  useEffect(() => {
    const newDays = days.map((day, indx) => ({
      ...day,
      dateOfWeek: `${moment().weekday(indx).format("L")}`,
    }));
    console.log("newDays-------", newDays);
    days = newDays;
    const dayId = days.find((day) =>
      day.label.toLowerCase() === dayLabel.toLowerCase() ? day.id : null
    );
    selectDay(dayId.id);
    
  }, []);

  const selectDay = async (id) => {
    const currentDayForImage = days.find((day) => day.id === id);
    await services.getCurrentUser(userToken).then((data) => {
      setTotalPoints(data.data.user.points);
      const points = data.data.user.tasks.reduce((acc, task) => {
        let sum =
          task.days.filter((day) => day.isActive).length * task.taskPoints;
        return sum ? acc + sum : acc;
      }, 0);

      console.log("!!!!", data.data.user.tasks);
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
        isDone: task.days[0].isDone,
        id: task._id,
      }));

      // find user task 'isDone'

      // console.log(
      //   "data.data.user.tasks",
      //   data.data.user.tasks.map((task) => {
      //     console.log("task", task._id);
      //     return task.days.filter((task) => {
      //       return task.isDone;
      //     });
      //   })
      // );

      const resultforFilter = result.filter(
        (activeDay) => activeDay.days[0].length
      );
      setDetect(resultforFilter);
      console.log("resultforFilter", resultforFilter);
      if (resultforFilter.length === 0) {
        console.log("00000000000");
        setPlaningPoints(0);
        return;
      } else {
        setPlaningPoints(
          resultforFilter.reduce((acc, activeDay) => acc + activeDay.points, 0)
        );
      }

      // const dateOffTask = resultforFilter[0].days[0][0].date;
      setPlaningPoints(points);
      setTasks(resultforFilter);
      console.log('curentDayForImage', currentDayForImage)
    });
    setFullDate(currentDayForImage.dateOfWeek);

    setDayLabel(currentDayForImage.label);
    return currentDayForImage.name;
  };

  return (
    <div className={s.container}>
      {window.innerWidth < 769 && (
        <>
          <WeekTabs days={setMainPath()} choosenDay={selectDay} />
          <WeekTabContent
            dayLabel={dayLabel}
            fullDate={fullDate}
            tasks={tasks}
            totalPoints={totalPoints}
            planingPoints={planingPoints}
            detect={detect}
          />
        </>
      )}
      {window.innerWidth >= 770 && window.innerWidth <= 1199 && (
        <>
          <WeekTabContent
            dayLabel={dayLabel}
            fullDate={fullDate}
            tasks={tasks}
            choosenDay={selectDay}
            days={setMainPath()}
            totalPoints={totalPoints}
            planingPoints={planingPoints}
            today={setMainPath()}
            detect={detect}
          />
        </>
      )}
      {window.innerWidth >= 1200 && (
        <>
          <WeekTabs days={setMainPath()} choosenDay={selectDay} />
          <WeekTabContent
            dayLabel={dayLabel}
            fullDate={fullDate}
            tasks={tasks}
            totalPoints={totalPoints}
            planingPoints={planingPoints}
            detect={detect}
          />
        </>
      )}
    </div>
  );
};
export default MainPage;
