import React from "react";
import styles from "./Toogle.module.css";

function Toogle() {
  const [on, setOnState] = React.useState(false);
  const toggle = () => setOnState((o) => !o);
  return (
    <button className={on ? styles.on : styles.off} onClick={toggle}>
      <span className={styles.done}>&#10004;</span>
      <span className={styles.yes}>!</span>
      <span className={styles.pin} />
    </button>
  );
}

export default Toogle;
