import React from "react";
import { Card } from "../card/Card";



export const CardList = ({data, onChange, plusPoint}) => {
    
  return (
    <ul>
        {data.map((card, index) => {
            return (
                <Card data={card} key={index} onChange={onChange} plusPoint={plusPoint}/>
            )
        })}
    </ul>
  );
};
