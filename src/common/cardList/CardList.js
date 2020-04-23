import React from "react";
import { Card } from "../card/Card";



export const CardList = ({data, plusPoint}) => {
    
  return (
    <ul>
        {data.map((card, index) => {
            return (
                <Card data={card} key={index}  plusPoint={plusPoint}/>
            )
        })}
    </ul>
  );
};
