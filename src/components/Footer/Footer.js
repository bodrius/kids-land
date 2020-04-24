import React from "react";
import styles from "./styles.module.css";

export const Footer = () => {
  let content = (
    <>
      <div className={styles.footerLogoContainer}>
        <span className={styles.footerlogoLabel}>KidsLike</span>
        <img alt="logo" className={styles.footerLogoIcon} src={require("./victoryLogo.svg")} />
      </div>
      <div className={styles.footerDevContainer}>
        <span className={styles.footerDevLabel}>
          Робимо життя батьків і дітей ізі
          <span style={{ fontSize: "16px" }}>&#9786;</span>
        </span>
        <span className={styles.footerDevCredit}>GoIT / BC18</span>
        <span className={styles.footerDevYear}>2020</span>
      </div>
    </>
  );
  if (window.innerWidth > 767) {
    content = (
      <>
        <span className={styles.footerLogoLabel}>KidsLike</span>
        <img alt="maket" className={styles.footerLogoIcon} src={require("./victoryLogo.svg")} />
        <span className={styles.footerDevLabel}>
          |  Робимо життя батьків і дітей ізі {':)'}  |
        </span>
        <span className={styles.footerDevCredit}>GoIT / BC18 2020</span>
      </>
    );
  }

  return <footer className={styles.footer}>{content}</footer>;
};