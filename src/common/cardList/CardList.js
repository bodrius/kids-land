import React from "react";
import style from "../card/Card.module.css";
import { Card } from "../card/Card";


export const CardList = ({data, plusPoint, getTasks}) => {
    
  return (
    <ul className={style.Card__listUl}>
        {data.map((card, index) => {
            return (
                <Card data={card} key={index}  plusPoint={plusPoint} getTasks={getTasks}/>
            )
        })}
    </ul>
  );
};
