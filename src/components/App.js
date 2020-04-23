import React from "react";
import { WeekTabs } from "./main/WeekTabs";
import CardListUl from "./cardList/CardListUl";
import { services } from "../services/services";
import { Header } from "./header/Header";
import { AwardsPage } from "./awardsPage/AwardsPage";
import { HeaderRouting } from "../components/headerRouting/HeaderRouting";
import { MainPage } from "./mainPage/Mainpage";
import { ContactsPage } from "./contactsPage/ContactsPage";
import ProgressBar from "./progressBar/ProgressBar";
import Auth from "./auth/Auth";

export const App = () => {
  const routing = HeaderRouting();

  // services.createUser({email: "test1234@gmail.com", password: "qwertys"}).then(data=>console.log('signUp', data));

  // services
  //   .userSignIn({ email: "test1234@gmail.com",WeekTabs password: "qwertys" })
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

  return (
    <>
      <div>
        {/* {<Auth />} */}
        {/* <Header /> */}
        {/* <WeekTabs /> */}
        {/* <CardListUl /> */}
        <AwardsPage />
        {/* {<ContactsPage />} */}
        {/* {<ProgressBar />} */}
      </div>
      {routing}
    </>
  );
};
