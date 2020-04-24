import React from "react";
import { CardList } from "../../common/cardList/CardList";
import  data from "../../common/cardList/data.json";

export const PlanningPage = () => {
  const {user: {tasks}} = data;
  const [allUserPoints, setAllUserPoints] = React.useState(0);
  const total = tasks.reduce((prev, current) => {
    const days = current.days.filter((day) => day.isActive === true).length;
    return prev + current.taskPoints * days;
  }, 0);
  console.log("total", total);
  const plusPoint = (p) => {
    console.log("p", p);
    setAllUserPoints(allUserPoints + p);
  };
  console.log('allUserPoints', allUserPoints)
  return (
    <CardList
      plusPoint={plusPoint}
      data={tasks}
      
    />
  );
};
