import React from "react";
import style from "./Card.module.css";
import CardTransition from "././CardTransition.module.css";
import { CSSTransition } from "react-transition-group";
import { StaticRouter } from "react-router-dom";
import { ButtonPlus } from "../buttonPlus/ButtonPlus.js";
import { useSelector } from "react-redux";
import axios from "axios";

export const Card = ({
  data: { imgName, title, taskPoints, days, _id },
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
          id={_id}
        />
        <div>
          <img
            src={
              imgName
                ? require(`../../assets/image/planImg/${imgName}.jpg`)
                : require(`../../assets/image/modalAddTask/3.jpg`)
            }
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

export const Popup = ({ visible, days, point, plusPoint, id }) => {
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
              id={id}
            />
          );
        })}
      </ul>
    </CSSTransition>
  );
};

const CheckBox = ({ text, checked, point, plusPoint, id }) => {
  const [state, setState] = React.useState(checked);
  const { userToken } = useSelector((state) => state.user);
  return (
    <li className={style.Popup__li}>
      <label>
        <input
          type="checkbox"
          checked={state}
          onChange={async () => {
            console.log("text", text);
            console.log("id", id);
            console.log("userToken", userToken);
            setState(!state);
            plusPoint(!state ? point : -1 * point);
            const chooseDays = await currentTask(id, userToken);
            console.log("chooseDays", chooseDays);
            await updateСommission(text, id, userToken, chooseDays);
          }}
        />
        <span>{text}</span>
      </label>
    </li>
  );
};

const currentTask = async (id, token) => {
  const data = await axios.get("https://kidslike.goit.co.ua/api/auth/current", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const res = data.data.user.tasks.find((t) => t._id === id);
  console.log(res.days);
  return res;
};

const updateСommission = (day, commissionId, token, days) => {
  const filter = days.days.map((d) =>
    d.title === day ? { ...d, isActive: !d.isActive } : d
  );

  fetch(`https://kidslike.goit.co.ua/api/tasks/${commissionId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ days: filter }),
  })
    .then((res) => res.json())
    .then((resData) => console.log(resData));
};
