import React from "react";
import styles from "./styles.module.css";

export const PlanningPoints = ({ score = "25" }) => {
  let content = (
    <>
      <span className={styles.planningPointsScore}>{score}</span>
      <span className={styles.planningPointsScoreLabel}>БАЛИ</span>
    </>
  );

  if (window.innerWidth > 767) {
    content = (
      <>
        <span className={styles.planningPointsScoreLabel}>Визначено завдань на</span>
        <span className={styles.planningPointsScore}>{score}</span>
        <span className={styles.planningPointsScoreLabel}>бали</span>
      </>
    );
  }

  return <div className={styles.planningPointsContainer}>{content}</div>;
};
