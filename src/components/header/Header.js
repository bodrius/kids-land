import React from "react";
import {NavLink} from 'react-router-dom'
import css from "./header.module.css";
import { Logo } from "./logo/Logo";
import { Navigation } from "./navigation/Navigation";
import { UserInfo } from "./userInfo/UserInfo";

export const Header = () => {
    const isAuth=true;
  return (
    <>
      <div className={css.backdrop}>
        <div className={css.headerContainer}>
          <div className={css.logoContainer}>
            <Logo />
          </div>
          {isAuth&&(
              <>
          <div className={css.navigUserInfoContainer}>
            <div className={css.userInfoContainer}>
              <UserInfo />
            </div>
            <div className={css.navContainer}>
              <Navigation  />
            </div>
          </div>
          </>)}
          {!isAuth&&(
                   <div className={css.navLinkDiv}>
                   <NavLink to='contact-us'
                   // eslint-disable-next-line
                   className={css.contactLink} to='#'>
                       Контакти
                   </NavLink>
               </div>
          )}
   



        </div>
       

      </div>
    </>
  );
};

