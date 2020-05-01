import React, {useState} from "react";
import style from "./CardListLi.module.css";
import moment from "moment";
import Toogle from "../toogle/Toogle";
import { useSelector } from "react-redux";
import axios from "axios";
import { services } from "../../../services/services";
// const date = moment().format("Do MMMM YYYY");

const CardListLi = ({
  list,
  chooseAwards,
  toggle,
  pointsToModal,
  dayLabel,
  setTotalPoints,
}) => {
  const { userToken, userId } = useSelector((state) => state.user);

  const [flag, setFlag] = useState(false)

  // const drawing = () => {
  //   if (location.pathname === "/awards") {
  //     return (
  //       <Toogle
  //         point={list.taskPoints}
  //         chooseAwards={chooseAwards}
  //         card={list}
  //         collectAwards={collectAwards}
  //       />
  //     );
  //   } else if (location.pathname === "/") {
  //     if (date === date) {
  //       return <Toogle />;
  //     } else if (date !== date) {
  //       if (list.days[0][0].isDone === false) {
  //         return <ButtonBad />;
  //       } else if (list.days[0][0].isDone === true) {
  //         return <ButtonGood />;
  //       }
  //     }
  //   }
  // };

  const addPoints = async (id, token, points, cardPoint) => {
    const updatePoint = points + cardPoint;
    await services.updateUserPoints(token, id, updatePoint);
    setTotalPoints(updatePoint);
  };

  const completedtask = async (token) => {
    const allpoints = await axios.get(
      "https://kidslike.goit.co.ua/api/auth/current",
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return allpoints.data.user.points;
  };

  const currentTask = async (id, token) => {
    const data = await axios.get(
      "https://kidslike.goit.co.ua/api/auth/current",
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = data.data.user.tasks.find((t) => t._id === id);
    return res;
  };

  const updateСommission = (day, commissionId, token, days) => {
    const filter = days.days.map((d) =>
      d.title === day ? { ...d, isDone: true } : d
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

  return (
    <li className={style.Card__list}>
      <div>
        <img
          alt="img"
          src={
            list.source
              ? require(`../../../assets/image/prizesImg/${list.imgName}.jpg`)
              : // : "https://pluspng.com/img-png/task-png-big-image-png-2400.png"
              list.imgName
              ? require(`../../../assets/image/planImg/${list.imgName}.jpg`)
              : "https://pluspng.com/img-png/task-png-big-image-png-2400.png"
          }
          className={style.Card__listImg}
        />
      </div>
      <div className={style.Card__listFooter}>
        <div className={style.Card__listText}>
          <p className={style.Card__listTitle}>{list.title}</p>
          <p className={style.Card__listPoint}>
            {list.points || list.taskPoints} БАЛIВ
          </p>
        </div>
        <div className={style.Card__listBt}>
          {list.source ? (
            <Toogle
              point={list.taskPoints}
              chooseAwards={chooseAwards}
              card={list}
              choosenAwards={toggle}
              pointsToModal={pointsToModal}
            />
          ) : (
            <>
              {/* {!list.days[0][0].isDone ? ( */}
                <button
                  disabled={moment().format("dddd") !== dayLabel.toLowerCase()}
                  style={{
                    backgroundColor:
                      moment().format("dddd") !== dayLabel.toLowerCase()
                        ? "red"
                        : "red",
                  }}
                  className={style.Card__listBtton}
                  onClick={async () => {
                    const chooseDays = await currentTask(list.id, userToken);
                    await updateСommission(
                      list.days[0][0].title,
                      list.id,
                      userToken,
                      chooseDays
                    );
                    const allPoints = await completedtask(userToken);
                    await addPoints(userId,  userToken, allPoints, list.points);
                    setFlag(true);
                  }}
                >
                  {!flag? "+": <div className={style.buttonLike}> &#10004;</div>}
                </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default CardListLi;
