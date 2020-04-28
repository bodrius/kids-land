import React from "react";
import styles from "./Toogle.module.css";
import { useSelector, useDispatch } from "react-redux";
import { services } from "./../../../services/services";

function Toogle({ chooseAwards, card, collectAwards, value }) {
  const { userPoint, userToken, userId } = useSelector((state) => state.user);
  const [updatedPoints, setUpdatedPoints] = React.useState(userPoint);
  const user = useSelector((state) => state.user);
  const [on, setOnState] = React.useState(false);

  const initialState = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  };
  const [buttonId, setButtonId] = React.useState(initialState);

  // React.useEffect(() => {
  //   (async () => {
  //     const shit = await services.getCurrentUser(userToken);
  //     // console.log("shit", shit);
  //     await setUpdatedPoints(shit.data.user.points);
  //   })();
  // }, [on]);

  React.useEffect(() => {
    (async () => {
      if (!on) {
        const calculatingPoints =
          Number(updatedPoints) - Number(card.taskPoints);
        console.log("calculatingPoints MINUS", calculatingPoints);
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

  const setAllButtonsId = async (e) => {
    const key = e.target.value;
    setButtonId((prevState) => {console.log('prevState', key); return{ ...prevState, [key]: !prevState.key }});
    if (userPoint >= card.taskPoints) {
      toggle();
      chooseAwards(card.title, card.imgName, on);
    } else {
      alert("ИДИ ПОЛЫ ДРАИТЬ, ПАДЛА МЕЛКАЯ");
    }
  };

  const toggle = () => {
    setOnState((o) => !o);
  };

  return (
    <button
      value={value}
      className={on ? styles.on : styles.off}
      onClick={setAllButtonsId}
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
      {console.log("buttonId", buttonId)}
      <span className={styles.done}>&#10004;</span>
      <span className={styles.yes}>!</span>
      <span className={styles.pin} />
    </button>
  );
}

export default Toogle;
