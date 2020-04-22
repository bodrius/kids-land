import React from "react";
import {CurrentDay} from '../components/currentDay/CurrentDay'
import { CurrentWeekRange } from "./currentWeekRange/CurrentWeekRange";
import { services } from "../services/services";
import { Header } from "./header/Header";
import { AwardsPage } from "./awardsPage/AwardsPage";
import { HeaderRouting } from "../components/headerRouting/HeaderRouting";
// import { useEffect } from "react-redux";
import Auth from "./auth/Auth";

export const App = () => {
  const routing = HeaderRouting();

  
  ////////test for services methods//////////
  // services.createUser({email: "test1234@gmail.com", password: "qwertys"}).then(data=>console.log('signUp', data));

  // services
  //   .userSignIn({ email: "test1234@gmail.com", password: "qwertys" })
  //   .then((data) => console.log("signIn", data));

  // services.getCurrentUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWY1Zjk2MWU0NDY3NWYwNGFjMGZkNCIsImlhdCI6MTU4NzUwMzQxMCwiZXhwIjoxNTg4MTA4MjEwfQ.YCQctkw76xPB6uv9RsoMae_MsTEVQb1huaXKrfkqHzk").then(data=>console.log('currentUser', data));

  // services.updateUserPoints("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWY1Zjk2MWU0NDY3NWYwNGFjMGZkNCIsImlhdCI6MTU4NzUwMzQxMCwiZXhwIjoxNTg4MTA4MjEwfQ.YCQctkw76xPB6uv9RsoMae_MsTEVQb1huaXKrfkqHzk",'5e9f5f961e44675f04ac0fd4',100).then(data=>console.log('currentUser', data));

  // services.createUserTask("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWY1Zjk2MWU0NDY3NWYwNGFjMGZkNCIsImlhdCI6MTU4NzUwMzQxMCwiZXhwIjoxNTg4MTA4MjEwfQ.YCQctkw76xPB6uv9RsoMae_MsTEVQb1huaXKrfkqHzk",{title: 'Task title', taskPoints: 10}).then(data=>console.log('currentUser', data));

  services
    .updateUserTask(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWY1Zjk2MWU0NDY3NWYwNGFjMGZkNCIsImlhdCI6MTU4NzUwMzQxMCwiZXhwIjoxNTg4MTA4MjEwfQ.YCQctkw76xPB6uv9RsoMae_MsTEVQb1huaXKrfkqHzk",
      "5e9f6dee1e44675f04ac0fde",
      { title: "New title" }
    )
    .then((data) => console.log("currentUser", data));
  //////////////////////////////////////////////

  return (
    <>
      <div>
        <Header />
        <Auth />
<CurrentWeekRange/>
<CurrentDay/>
        <AwardsPage />
      </div>
      {routing}
    </>
  );
};
