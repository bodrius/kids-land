import React from "react";
import style from "./CardListLi.module.css";

const CardListLi = (list) => {
  console.log(list);
  return (
    <li className={style.Card__list}>
      <div>
        <img
          src={require(`../../../assets/image/planImg/${list.list.imgName}.jpg`)}
          alt="img"
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
        </div>
      </div>
    </li>
  );
};
export default CardListLi;
