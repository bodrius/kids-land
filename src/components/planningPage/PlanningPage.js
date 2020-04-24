import React from "react";
// import cardList from "../cardList/CardList.json";
// import CardListLi from "../cardList/cardListLi/CardListLi";
import { CardList } from "../../common/cardList/CardList";
import data from "../../common/cardList/data.json";
import CurrentWeekPlaning from '../CurrentDay/CurrentWeekPlaning'

export const PlanningPage = () => {
  const [state, setState] = React.useState(data.user.tasks);
  const [allUserPoints, setAllUserPoints] = React.useState(0);
  const total = state.reduce((prev, current) => {
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
    <>
    <CurrentWeekPlaning/>
    <CardList
      plusPoint={plusPoint}
      data={state}
      onChange={(data) => {
        console.log("data", data);
        // setState([...state, data])
      }}
    />
    </>
  );
};
