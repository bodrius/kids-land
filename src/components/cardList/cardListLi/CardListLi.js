import React from "react";
import style from "./CardListLi.module.css";
import moment from "moment";
import Toogle from "../toogle/Toogle";
import ButtonGood from "../../../common/bottonGod/ButtonGood";
import ButtonBad from "../../../common/buttonBad/ButtonBad";

function CardListLi({ list, chooseAwards, collectAwards, location }) {
  const drawing = () => {
    if (location.pathname === "/awards") {
      return (
        <Toogle
          point={list.taskPoints}
          chooseAwards={chooseAwards}
          card={list}
          collectAwards={collectAwards}
        />
      );
    } else if (location.pathname === "/") {
      const date = moment().format("Do MMMM YYYY");
      if (date === date) {
        return <ButtonGood />;
      }
    }
  };

  return (
    <li className={style.Card__list}>
      <div>
        <img
          alt="img"
          src={
            list.source
              ? require(`../../../assets/image/prizesImg/${list.imgName}.jpg`)
              : require(`../../../assets/image/planImg/${list.imgName}.jpg`)
          }
          className={style.Card__listImg}
        />
      </div>
      <div className={style.Card__listFooter}>
        <div className={style.Card__listText}>
          <p className={style.Card__listTitle}>{list.title}</p>
          <p className={style.Card__listPoint}>{list.taskPoints} БАЛIВ</p>
        </div>
        <div className={style.Card__listBt}>{drawing()}</div>
      </div>
    </li>
  );
}
export default CardListLi;
