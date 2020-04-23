import React from "react";
import cardList from "./CardList.json";
import CardListLi from "./cardListLi/CardListLi";
import style from "./CardListUl.module.css";

const CardListUl = () => {
  console.log("cardList", cardList.user.tasks[1]);
  return (
    <ul className={style.card__listUL}>
      {cardList.user.tasks.map((list) => (
        <CardListLi list={list} key={list._id} />
      ))}
    </ul>
  );
};

export default CardListUl;
