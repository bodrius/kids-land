import React from "react";
import { Card } from "../card/Card";
import css from '../../components/planningPage/Planning.module.css';



export const CardList = ({data, onChange, plusPoint}) => {
    
  return (
    <ul className={css.planListBlock}>
        {data.map((card, index) => {
            return (
                <Card data={card} key={index} onChange={onChange} plusPoint={plusPoint}/>
            )
        })}
    </ul>
  );
};
