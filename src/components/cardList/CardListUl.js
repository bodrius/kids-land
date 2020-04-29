import React from "react";
import { withRouter } from "react-router-dom";
import cardList from "./CardList.json";
import CardListLi from "./cardListLi/CardListLi";
import style from "./CardListUl.module.css";


const CardListUl = ({ cardList, chooseAwards, toggle, pointsToModal, location }) => {

  return (
    <ul className={style.card__listUL}>
      {cardList.length !== 0 &&
        cardList.map((list) => {
          return (
            <CardListLi
              list={list}
              key={list._id}
              value={list._id}
              chooseAwards={chooseAwards}
              location={location}
              toggle={toggle}
              pointsToModal={pointsToModal}
            />
          );
        })}
    </ul>
  );
};

export default withRouter(CardListUl);
