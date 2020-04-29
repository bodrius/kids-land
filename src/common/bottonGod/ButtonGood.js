import React from "react";
import style from "./ButtonGood.module.css"

const ButtonGood = () => {
  return (
    <div className={style.button}>
      <button className={style.buttonGood}>&#10004;</button>
    </div>
  );
};
export default ButtonGood;
