import React from "react";
import style from "./CardListLi.module.css";
import Toogle from "../toogle/Toogle";
import ButtonGood from "../../../common/bottonGod/ButtonGood";
import ButtonBad from "../../../common/buttonBad/ButtonBad";

  // switch (path) {
  //   case "/awards":
  //     return <Toogle />;
  //   case "/":
  //     return <Toogle />;

  //   default:
  //     break;
  // }

const CardListLi = ({ list, chooseAwards, collectAwards, value }) => {
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
        <div className={style.Card__listBt}>
          {list.source ? (
            <Toogle
              point={list.taskPoints}
              chooseAwards={chooseAwards}
              card={list}
              collectAwards={collectAwards}
              value={value}
            />
          ) : (
            <button className={style.Card__listBtton}>+</button>
          )}
        </div>
      </div>
    </li>
  );
};
export default CardListLi;
