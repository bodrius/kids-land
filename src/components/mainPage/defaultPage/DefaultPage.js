import React from 'react';
import ButtonCurrentWeekRange from '../../CurrentWeekRange/ButtonCurrentWeekRange';
import s from "./DefaultPage.module.css"
const DefaultPage = () => {
    return(
        <div className ={s.container}>
            <ButtonCurrentWeekRange/>
        </div>
    )
}
    
  

export default DefaultPage;