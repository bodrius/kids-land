import React from "react";
import css from "./awardsPage.module.css";
import awardsLogo from "../../assets/image/icon/present box/gift-box.svg";

export const AwardsPage = () => {
  return (
    <div className={css.awardsContainer}>
      <div className={css.awardsWrapper}>
        <div className={css.awardsHeader}>
          <img src={awardsLogo} alt="gift-box" width={26} height={26} />
          <span className={css.awardsHeaderText}>Мої призи</span>
        </div>
        <ul className={css.awardsList}>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
        </ul>
        <div className={css.awardsButtonWrapper}>
          <button className={css.awardsButton}>Підтвердити</button>
        </div>
      </div>
    </div>
  );
};
