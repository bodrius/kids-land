import React from "react";
import styles from "./Toogle.module.css";
import { useSelector } from "react-redux";
import { services } from "./../../../services/services";

function Toogle({ chooseAwards, card, collectAwards }) {
  const { userPoint, userToken, userId } = useSelector((state) => state.user);
  // const [updatedPoints, setUpdatedPoints] = React.useState(userPoint);
  // const user = useSelector((state) => state.user);
  // const shit = services
  //   .getCurrentUser(userToken)
  //   .then((data) => console.log("user", data));
  const [on, setOnState] = React.useState(false);

  // React.useEffect(() => {
  //   console.log("UsEfFeCtuserPoint", userPoint);
  // }, [on]);

  const toggle = () => {
    if (userPoint >= card.taskPoints) {
      chooseAwards(card.title, card.imgName, on);
      setOnState((o) => !o);
      if (on) {
        console.log("userPoint", userPoint);
        const calculatingPoints = Number(userPoint) - Number(card.taskPoints);
        // setUpdatedPoints(calculatingPoints);
        collectAwards(calculatingPoints);
        console.log("updatedPoints -- MINUS", calculatingPoints);
      } else {
        console.log("userPoint", userPoint);
        const calculatingPoints = Number(userPoint) + Number(card.taskPoints);
        // setUpdatedPoints(calculatingPoints);
        collectAwards(calculatingPoints);
        console.log("updatedPoints -- PLUS", calculatingPoints);
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
