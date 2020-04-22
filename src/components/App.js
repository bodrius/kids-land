import React from "react";
import {CurrentDay} from '../components/currentDay/CurrentDay'
import { CurrentWeekRange } from "./currentWeekRange/CurrentWeekRange";


export const App = () => {
  return (
    <div>
      <h2>WORK!</h2>
     <CurrentDay/>
     <CurrentWeekRange/>
    </div>
  );
};
