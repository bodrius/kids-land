import React from "react";
import style from "./CardListLi.module.css";
import Toogle from "../toogle/Toogle";
import ButtonGood from "../../../common/bottonGod/ButtonGood";
import ButtonBad from "../../../common/buttonBad/ButtonBad";

const CardListLi = (list) => {
  // switch (path) {
  //   case "/awards":
  //     return <Toogle />;
  //   case "/":
  //     return <Toogle />;

  //   default:
  //     break;
  // }

  return (
    <li className={style.Card__list}>
      <div>
        <img
          alt="img"
          src={
            list.list.source
              ? require(`../../../assets/image/prizesImg/${list.list.imgName}.jpg`)
              : require(`../../../assets/image/planImg/${list.list.imgName}.jpg`)
          }
          className={style.Card__listImg}
        />
      </div>
      <div className={style.Card__listFooter}>
        <div className={style.Card__listText}>
          <p className={style.Card__listTitle}>{list.list.title}</p>
          <p className={style.Card__listPoint}>{list.list.taskPoints} БАЛIВ</p>
        </div>
        <div className={style.Card__listBt}>
          <button className={style.Card__listBtton}>+</button>
          <Toogle />
          <ButtonGood />
          <ButtonBad />
        </div>
      </div>
    </li>
  );
};
export default CardListLi;
