import React from "react";
import style from "./Card.module.css";
import CardTransition from "././CardTransition.module.css";
import { CSSTransition } from "react-transition-group";
import { StaticRouter } from "react-router-dom";
import { ButtonPlus } from "../buttonPlus/ButtonPlus.js";

export const Card = ({
  data: { imgName, title, taskPoints, days },
  plusPoint,
}) => {
  const [state, setState] = React.useState({ visible: false });
  const [point, setPoint] = React.useState(0);
  // console.log("card");
  return (
    <>
      <li className={style.Card__list}>
        <Popup
          visible={state.visible}
          days={days}
          point={taskPoints}
          plusPoint={plusPoint}
        />
        <div>
          <img
            src={imgName ? require(`../../assets/image/planImg/${imgName}.jpg`) : 'https://pluspng.com/img-png/task-png-big-image-png-2400.png'}
            alt="img"
            className={style.Card__listImg}
          />
        </div>
        <div className={style.Card__listFooter}>
          <div className={style.Card__listText}>
            <p className={style.Card__listTitle}>{title}</p>
            <p className={style.Card__listPoint}>{taskPoints} БАЛIВ</p>
          </div>
          <div>
            <ButtonPlus
              onClick={() => {
                setState({ ...state, visible: !state.visible });
              }}
            >
              {state.visible ? (
                "Ok"
              ) : (
                <span className={style.Card__plus}>+</span>
              )}
            </ButtonPlus>
          </div>
        </div>
      </li>
    </>
  );
};

export const Popup = ({ visible, days, point, plusPoint }) => {
  return (
    <CSSTransition
      in={visible}
      timeout={500}
      classNames={CardTransition}
      unmountOnExit
    >
      <ul className={style.Popup}>
        {days.map((day, index) => {
          return (
            <CheckBox
              point={point}
              plusPoint={plusPoint}
              key={index}
              text={day.title}
              checked={day.isActive}
            />
          );
        })}
      </ul>
    </CSSTransition>
  );
};

const CheckBox = ({ text, checked, point, plusPoint }) => {
  const [state, setState] = React.useState(checked);
  return (
    <li className={style.Popup__li}>
      <label>
        <input
          type="checkbox"
          checked={state}
          onChange={() => {
            setState(!state);
            plusPoint(!state ? point : -1 * point);
          }}
        />
        <span>{text}</span>
      </label>
    </li>
  );
};
