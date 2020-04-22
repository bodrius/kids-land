import React from 'react'
import {useSelector} from 'react-redux'
import moment from 'moment'


let dayName = null
let date = null

const momentObj = moment()

const windowWidth = document.documentElement.clientWidth;

const WeekTabContent = () => {
    
    
    return(
        <div>
            {(windowWidth<768||windowWidth>=1200)&&<CurrentWeekRange/>}
        </div>
        <div>

        </div>
    )
}

export default WeekTabContent;
