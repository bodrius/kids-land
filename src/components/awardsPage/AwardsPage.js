import React, { useEffect, useState } from "react";
import css from "./awardsPage.module.css";
import awardsLogo from "../../assets/image/icon/present box/gift-box.svg";
import { services } from "../../services/services";
import { store } from "../../redux/store";
// import openModal from '../'

export const AwardsPage = () => {
  const openModal = () => {
    console.log("HALLO M8");
  };

  const [points, setPoints] = useState("");

  useEffect(async () => {
    const shit = await services.getCurrentUser(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWY1Zjk2MWU0NDY3NWYwNGFjMGZkNCIsImlhdCI6MTU4NzUwMzQxMCwiZXhwIjoxNTg4MTA4MjEwfQ.YCQctkw76xPB6uv9RsoMae_MsTEVQb1huaXKrfkqHzk",
      "5e9f6dee1e44675f04ac0fde"
    );
    console.log("shit", shit);
    const shitPoints = shit.data.user.points;
    setPoints(shitPoints);
    console.log("shitPoints", shitPoints);
  }, []);

  return (
    <div className={css.awardsContainer}>
      <div className={css.awardsWrapper}>
        <div className={css.awardsHeader}>
          <div className={css.awardsHeaderLogo}>
            <img src={awardsLogo} alt="gift-box" width={26} height={26} />
            <span className={css.awardsHeaderText}>Мої призи</span>
          </div>
          <div className={css.awardsHeaderBarContainer}>
            <div className={css.awardsHeaderBar}>
              <span>{points}</span>
            </div>
          </div>
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
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}></div>
          </li>
        </ul>
        <div className={css.awardsButtonWrapper}>
          <button className={css.awardsButton} onClick={openModal}>
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};
