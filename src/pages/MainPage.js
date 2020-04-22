import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import s from './MainPage.module.css'
import moment from 'moment'; 

const windowWidth = document.documentElement.clientWidth;
const setMainPath = ()=>{
const weekDay = moment().get('day')
return(weekDay)

}
alert('weekDay', weekDay)


const MainPage = () => {
    const day = setMainPath()
    const history = useHistory()

    useEffect(()=>
    {history.push(day)},
    [day, history])
    
return (
<div className={s.mainDiv}>
    {windowWidth < 768 && <Васин компонент для мобила/>}
    {windowWidth >=768 && windowWidth <1200 && (<Васин компонент для ТАблетки/>)}
    {windowWidth >=1200 &&(<Васин компонент для ДЕска/>)}
    <WeekTabContent/>
</div>
)

}

    
export default MainPage;
