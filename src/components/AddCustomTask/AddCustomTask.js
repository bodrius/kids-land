import React from "react";
import styles from "./styles.module.css";

export const AddCustomTask = ({ handleOpenTaskModal }) => {

  let content = (
    <button onClick={handleOpenTaskModal} className={styles.addTaskBtn}>
      +
    </button>
  );
  if (window.innerWidth > 767) {
    content = (
      <>
        <p className={styles.addTaskBtnLabel}>
          Хочешь отримати більше призів - додай завдання {":)"}
        </p>
        <button onClick={handleOpenTaskModal} className={styles.addTaskBtn}>
          +
        </button>
      </>
    );
  }

  return <div className={styles.addTaskBtnContainer}>{content}</div>;
};
