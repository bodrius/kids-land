import React from "react";
import styles from "./Toogle.module.css";
import { useSelector } from "react-redux";
import { services } from "./../../../services/services";

function Toogle({ chooseAwards, card }) {
  const { userPoint, userToken } = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);
  const shit = services.getCurrentUser(userToken).then(data=>console.log('user', data))

  const [on, setOnState] = React.useState(false);
  const toggle = () => {
    if (userPoint >= card.taskPoints) {
      chooseAwards(card.title, card.imgName, on);
      setOnState((o) => !o);
      if (on) {
        const updatedPoints = Number(userPoint) + Number(card.taskPoints);
        services.updateUserPoints();
        // console.log("updatedPoints -- MINUS", updatedPoints);
        console.log('shit', shit)
      } else {
        const updatedPoints = Number(userPoint) - Number(card.taskPoints);
        services.updateUserPoints();
        // console.log("updatedPoints -- PLUS", updatedPoints);
      }
    } else {
      alert("ИДИ ПОЛЫ ДРАИТЬ, ПАДЛА МЕЛКАЯ");
    }
  };
  return (
    <button className={on ? styles.on : styles.off} onClick={toggle}>
      <span className={styles.done}>&#10004;</span>
      <span className={styles.yes}>!</span>
      <span className={styles.pin} />
    </button>
  );
}

export default Toogle;
