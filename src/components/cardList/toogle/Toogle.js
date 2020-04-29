import React from "react";
import styles from "./Toogle.module.css";

function Toogle({ chooseAwards, card, pointsToModal, choosenAwards }) {
  const [on, setOnState] = React.useState(false);

  const toggle = (e) => {
    setOnState((o) => !o);
    chooseAwards(card.title, card.imgName, on, card.taskPoints);
  };

  React.useEffect(() => {
    pointsToModal(choosenAwards);
  }, [on]);

  return (
    <button
      className={on ? styles.on : styles.off}
      onClick={(e) => toggle(e)}
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
