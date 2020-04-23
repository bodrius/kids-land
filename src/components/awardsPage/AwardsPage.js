import React, { useEffect, useState } from "react";
import css from "./awardsPage.module.css";
import awardsLogo from "../../assets/image/icon/present box/gift-box.svg";
<<<<<<< HEAD
import { DayList } from "../dayList/DayList";
=======
import { services } from "../../services/services";
import AwardsModal from "./../awardsModal/AwardsModal";
>>>>>>> dev

export const AwardsPage = () => {
  const [points, setPoints] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(false);
  }, []);

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

  const openModal = () => {
    setModal(true);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModal(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const prizes = [
    {
      title: "milk",
      imgName:
        "https://cdn.andyroid.net/website/wp-content/uploads/2015/12/mr-square-icon.png",
      taskPoints: 100,
    },
    {
      title: "i want milk",
      imgName:
        "https://cdn.andyroid.net/website/wp-content/uploads/2015/12/mr-square-icon.png",
      taskPoints: 100,
    },
    {
      title: "more milk",
      imgName:
        "https://cdn.andyroid.net/website/wp-content/uploads/2015/12/mr-square-icon.png",
      taskPoints: 100,
    },
    {
      title: "moreeeeeee milk",
      imgName:
        "https://cdn.andyroid.net/website/wp-content/uploads/2015/12/mr-square-icon.png",
      taskPoints: 100,
    },
    {
      title: "I SAID MOAR MILK",
      imgName:
        "https://cdn.andyroid.net/website/wp-content/uploads/2015/12/mr-square-icon.png",
      taskPoints: 100,
    },
  ];

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
<<<<<<< HEAD
            <div className={css.awardsListItemContainer}><DayList/></div>
=======
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
>>>>>>> dev
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
          </li>
          <li className={css.awardsListItem}>
            <div className={css.awardsListItemContainer}>
              <img
                src="http://i.piccy.info/i9/61aac2980df13c903ff4d996c42273d5/1587558963/156318/1374341/sexyKozah.jpg"
                alt="sexyKozah"
                width="100%"
                height="80%"
              />
            </div>
          </li>
        </ul>
        <div className={css.awardsButtonWrapper}>
          {modal ? (
            <AwardsModal
              prizes={prizes}
              openModaled={modal}
              useOutsideAlerter={useOutsideAlerter}
            />
          ) : (
            !modal
          )}
          <button className={css.awardsButton} onClick={openModal}>
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};
