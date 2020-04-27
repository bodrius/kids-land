import React from "react";
import styles from "./Toogle.module.css";
import { useSelector, useDispatch } from "react-redux";
import { services } from "./../../../services/services";

function Toogle({ chooseAwards, card, collectAwards }) {
  const { userPoint, userToken, userId } = useSelector((state) => state.user);
  const [updatedPoints, setUpdatedPoints] = React.useState(userPoint);
  const user = useSelector((state) => state.user);
  // const shit = services
  //   .getCurrentUser(userToken)
  //   .then((data) => console.log("user", data));
  const [on, setOnState] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const shit = await services.getCurrentUser(userToken);
      console.log("shit", shit);
      await setUpdatedPoints(shit.data.user.points);
    })();
  }, [on]);

  React.useEffect(() => {
    (async () => {
      if (on) {
        const calculatingPoints =
          Number(updatedPoints) - Number(card.taskPoints);
        // console.log('calculatingPoints', calculatingPoints)
        await setUpdatedPoints(calculatingPoints);
      } else {
        const calculatingPoints =
          Number(updatedPoints) + Number(card.taskPoints);
        await setUpdatedPoints(calculatingPoints);
      }
      await collectAwards(updatedPoints);
      // console.log("Calculation", updatedPoints);
    })();
  }, [on]);

  const toggle = () => {
    if (userPoint >= card.taskPoints) {
      setOnState((o) => !o);

      chooseAwards(card.title, card.imgName, on);
    } else {
      alert("ИДИ ПОЛЫ ДРАИТЬ, ПАДЛА МЕЛКАЯ");
    }
  };

  return (
    <button
      className={on ? styles.on : styles.off}
      onClick={toggle}
      style={{
        width: 40,
        height: 18,
        border: 0,
        borderRadius: 50,
        position: "relative",
        cursor: "pointer",
        WebkitAppearance: "none",
        MozAppearance: "none",
      }}
    >
      <span className={styles.done}>&#10004;</span>
      <span className={styles.yes}>!</span>
      <span className={styles.pin} />
    </button>
  );
}

export default Toogle;
