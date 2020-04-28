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
  { id: 1, label: "Понеділок", name: "monday", selected: false },
  { id: 2, label: "Вівторок",   name: "tuesday",selected: false },
  { id: 3, label: "Середа",  name: "wednesday",selected: false },
  { id: 4, label: "Четвер",  name: "thursday",selected: false },
  { id: 5, label: "П'ятниця",  name: "friday",selected: false },
  { id: 6, label: "Субота",  name: "Saturday",selected: false },
  { id: 7, label: "Неділя", name: "Sunday",selected: false },
];

const windowWidth = document.documentElement.clientWidth;
const setMainPath = () => {
  const weekDay = moment().get("day");
  // console.log("weekday", weekDay)
  days.map((day) =>
    day.id === weekDay ? (day.selected=true) : (day.selected=false)
  );
  console.log('days', days)
  return days;
};

const dayLabel= moment(1518116057189).format('dddd')

const fullDate= moment(1518116057189).format("L")
 const  MainPage = () => {
  const {userToken, userTasks} = useSelector((state) => state.user);

  const [tasks, setTasks] = useState(null);
  const [dayLabel, setDayLabel] = useState(moment().format('dddd'))
  const [fullDate, setFullDate] =useState(moment().format('L'))
  
  // console.log("tasks --->!", tasks);
  const day = setMainPath();
  const history = useHistory();

  useEffect(() => {
    history.push(day);
  }, [day, history]);

  useEffect(() => {
      setTasks(userTasks);
  }, []);
  
  const selectDay = (id) => {
    const currentDayForImage =
    days.find((day) =>
      day.id === id 
    );     
    const res =        
    services
    .getCurrentUser(userToken)
    .then((data) => { const result= data.data.user.tasks.map((task)=>({
      title: task.title,
      points: task.taskPoints,
      imgName: task.imgName,
      date: task.date,
      days: [task.days.filter((task) => task.isActive &&task.name === currentDayForImage.name)]
          })); 
          console.log('result', result);
          const resultforFilter = result.filter((activeDay)=>activeDay.days[0].length)
          console.log('resultforFilter', resultforFilter)
          setTasks(resultforFilter)
          
        });
        console.log('currentDayForImage', currentDayForImage)
        setDayLabel(currentDayForImage.label)
        setFullDate(moment(1588095698476).format("L"))
       
    return currentDayForImage.name;
  };
 
  return (
    <div className={s.container}>
      {/* <div > */}

        {/* {windowWidth < 768 && (
          <WeekTabs choosenDay={selectDay} days={setMainPath()}  />
        )} */}
          <WeekTabs choosenDay={selectDay} days={setMainPath()} />
        {/* )} */}
      {/* </div> */}
      {/* <div> */}
          <WeekTabContent dayLabel={dayLabel} tasks={tasks} fullDate={fullDate} />
      {/* </div> */}


      {/* <div>
        
      </div> */}
    </div>
  );                                 
};
export default MainPage;
