import React from "react";
import style from "./Card.module.css";
import { StaticRouter } from "react-router-dom";
import {DayList} from '../../components/dayList/DayList';

export const Card = ({
  data: { imgName, title, taskPoints, days },
  onChange,
  plusPoint,
}) => {
  const [state, setState] = React.useState({ visible: false });
  const [point, setPoint] = React.useState(0);
  console.log("card");
  return (
    <li className={style.Card__list}>
      {/* <Popup
        visible={state.visible}
        onChange={onChange}
        days={days}
        point={taskPoints}
        plusPoint={plusPoint}
      /> */}
      <div style={{position:"relative"}}>
        <img
          src={require(`../../assets/image/planImg/${imgName}.jpg`)}
          alt="img"
          className={style.Card__listImg}
        />
        <DayList flag={state.visible}/>
      </div>
      <div className={style.Card__listFooter}>
        <div className={style.Card__listText}>
          <p className={style.Card__listTitle}>{title}</p>
          <p className={style.Card__listPoint}>{taskPoints} БАЛIВ</p>
        </div>
        <div>
          <button
            className={style.Card__listBtn}
            onClick={() => {
              setState({ ...state, visible: !state.visible });
            }}
          >
            {state.visible ? "Ok" : <span className={style.Card__plus}>+</span>}
          </button>
        </div>
      </div>
    </li>
  );
};

export const Popup = ({ visible, days, onChange, point, plusPoint }) => {
  const styles = {};
  if (!visible) {
    styles.display = "none";
  }

  return (
    <ul className={style.Popup} style={styles}>
      {days.map((day, index) => {
        return (
          <CheckBox
            point={point}
            plusPoint={plusPoint}
            key={index}
            text={day.title}
            checked={day.isActive}
            onChange={onChange}
          />
        );
      })}
    </ul>
  );
};

const CheckBox = ({ text, checked, onChange, point, plusPoint }) => {
  // const [checked, setChecked] = React.useState(false);
  console.log("checked", checked);
  return (
    <li className={style.Popup__li}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            onChange(!checked);
            plusPoint(point)
          }}
        />
        <span>{text}</span>
      </label>
    </li>
  );
};
