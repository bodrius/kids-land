 import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

export const Navigation = () => {
  const [isMenuOpen, setMenuState] = useState(false);
  const openModal = () => {
    setMenuState(!isMenuOpen);
  };
  return (
    <>
      {window.screen.width < 1199 && isMenuOpen && (
        <>
          <div className={css.burgerContainer}>
            <div className={css.overlay}>
              <div className={css.pages}>
                <NavLink exact  to='/'  activeStyle={{color:'black'}}
                style={{color:' #e0e0e5'}} className={css.text}>Головна сторінка</NavLink>
              </div>
              <div className={css.pages}>
                <NavLink to='planning'   activeStyle={{color:'black'}}
                style={{color:' #e0e0e5'}} className={css.text}>Планування</NavLink>
              </div>
              <div className={css.pages}>
                <NavLink to='awards' activeStyle={{color:'black'}}
                style={{color:' #e0e0e5'}} className={css.text}>Призи</NavLink>
              </div>
              <div className={css.pages}>
                <NavLink to ='contact-us' activeStyle={{color:'black'}}
                style={{color:' #e0e0e5'}} className={css.text}>Контакти</NavLink>
              </div>
              <button className={css.closeModal} onClick={openModal}></button>
            </div>
          </div>
        </>
      )}

      {!isMenuOpen && window.screen.width < 1199 && (
        <button className={css.openModal} onClick={openModal}>
          <span className={css.buttonbar}></span>
          <span className={css.buttonbar}></span>
          <span className={css.buttonbar}></span>
        </button>
      )}

      {window.screen.width >= 1200 && (
        <>
          <ul className={css.pageList}>
            <li className={css.pageItem}><NavLink exact to='/' activeStyle={{color:'black'}}
                style={{color: '#a3a3b1'}} >Головна сторінка</NavLink></li>
            <li className={css.pageItem}><NavLink to='/planning' activeStyle={{color:'black'}}
                style={{color:' #a3a3b1'}} >Планування</NavLink></li>
            <li className={css.pageItem}><NavLink to='/awards'  activeStyle={{color:'black'}}
                style={{color:' #a3a3b1'}} >Призи</NavLink></li>
            <li className={css.pageItem}><NavLink to='/contact-us'  activeStyle={{color:'black'}}
                style={{color:' #a3a3b1'}} >Контакти</NavLink></li>
          </ul>
        </>
      )}
    </>
  );
};

