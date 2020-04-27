import React from "react";
import { withRouter } from "react-router-dom";
import cardList from "./CardList.json";
import CardListLi from "./cardListLi/CardListLi";
import style from "./CardListUl.module.css";

const CardListUl = (cardList = cardList.user.tasks) => {
    console.log('adasdadsa', cardList)

  return (
    <ul className={style.card__listUL}>
      {cardList.length !== 0 &&
        cardList.cardList.map((list) => {
          console.log("list", list);
          return <CardListLi list={list} key={list.id} />;
        })}
    </ul>
  );
};

export default withRouter(CardListUl);
