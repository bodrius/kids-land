import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./MainPage.module.css";
import moment from "moment";
import { WeekTabs } from "../main/WeekTabs";
import { services } from "../../services/services";
import { WeekTabContent } from "../main/WeekTabContent";
import "moment/locale/uk";

let days = [
  { id: 1, label: "Понеділок", name: "monday", selected: false },
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
  const { userToken, userTasks,userId } = useSelector((state) => state.user);
  // const startOfWeek = Date.now();
  //  moment().startOf("week").format("L");
  const [tasks, setTasks] = useState([]);
  const [dayLabel, setDayLabel] = useState(moment().format("dddd"));
  const [fullDate, setFullDate] = useState(moment().format("L"));
  const [planingPoints, setPlaningPoints]=useState(0)
  const [totalPoints, setTotalPoints]=useState(0)
  const day = setMainPath();
  const history = useHistory();
  console.log('startOfWeek_____', moment().weekday(0).format("L"))
  useEffect(() => {
    history.push(day);
  }, [day, history]);

  useEffect(() => {
    const dayId = days.find((day) =>
      day.label.toLowerCase() === dayLabel.toLowerCase() ? day.id : null
    );
    selectDay(dayId.id);
    const newDays=days.map((day,indx)=>({...day,dateOfWeek:`${moment().weekday(indx).format("L")}`}));
    console.log('newDays-------', newDays)
    days=newDays;
  }, []);

  const selectDay = async (id) => {
    await services.updateUserPoints(userToken,userId,200).then(data=>console.log('data',data));
    const currentDayForImage = days.find((day) => day.id === id);
     await services.getCurrentUser(userToken).then((data) => {
      setTotalPoints(data.data.user.points);
      const points = data.data.user.tasks.reduce((acc, task)=> {let sum=task.days.filter(day=>day.isActive).length*task.taskPoints; return sum?acc+sum:acc },0)
      console.log('------>>>>>points', points)
      const result = data.data.user.tasks.map((task) =>({
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
      // const points = result.reduce((acc, resultItem)=> {console.log("mmmmmmmmmmmmmmmmmmmmmm",resultItem.days.length); return acc+resultItem.days[0].length!==0&&resultItem.points?resultItem.days[0].length*resultItem.points:0},0)
      // setPlaningPoints(points)
      // console.log('points', points)
      const resultforFilter = result.filter(
        (activeDay) => activeDay.days[0].length,
      );
      setPlaningPoints(resultforFilter.reduce(((acc, activeDay) => acc+ activeDay.points),0));
      console.log('resultforFilter', resultforFilter);
      // const dateOffTask =resultforFilter.length? resultforFilter[0].days[0][0].date:0;
      // console.log('dateOffTask', dateOffTask);
     
      setPlaningPoints(points);
      setTasks(resultforFilter);
    });
    console.log("currentDayForImage", currentDayForImage);
    setDayLabel(currentDayForImage.label);
    setFullDate(currentDayForImage.dateOfWeek);
    // setFullDate(currentDayForImage.dayDate);
    // console.log("Some date----->", currentDayForImage.dayDate);

    return currentDayForImage.name;
  };

  return (
    <div className={s.container}>
      <WeekTabs choosenDay={selectDay} days={setMainPath()} />
      <WeekTabContent dayLabel={dayLabel} tasks={tasks} fullDate={fullDate} planingPoints={planingPoints} totalPoints={totalPoints}/>
    </div>
  );
};
export default MainPage;
