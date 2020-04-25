import React from "react";
import { HeaderRouting } from "../components/headerRouting/HeaderRouting";
import { useSelector } from "react-redux";
import { Header } from "./header/Header";
import {services} from '../services/services';

export const App = () => {
  const token = useSelector((state) => state.user.userToken);
  const userId = useSelector((state) => state.user.userId);
  const routing = HeaderRouting(token);
services.userSignIn({ "email": "test123@test.com", "password": "qwerty" }).then(data=>console.log('user', data));
console.log('userId', userId)

services.updateUserPoints("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTJmMDczY2Q1ODQ3NGE3NWQzOWQzMyIsImlhdCI6MTU4NzczODI0MCwiZXhwIjoxNTg4MzQzMDQwfQ.K4Kcm_XeaKaYYq4Z4KxLXudTZPbPW5HUriySFkFnnjo","5ea2f073cd58474a75d39d33",666)
// // services.getCurrentUser(token).then(data=>console.log('Current user', data));

  return (
    <>
      <Header token={token} />
      {routing}
    </>
  );
};
