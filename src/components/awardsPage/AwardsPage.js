import React, { useEffect, useState } from "react";
import css from "./awardsPage.module.css";
import awardsLogo from "../../assets/image/icon/present box/gift-box.svg";
import { services } from "../../services/services";
import AwardsModal from "./../awardsModal/AwardsModal";
import CardListUl from "./../cardList/CardListUl";
import ProgressBar from "./../progressBar/ProgressBar";

export const AwardsPage = () => {
  const [points, setPoints] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(false);
  }, []);

  useEffect(() => {
    (async () => {
      const shit = await services.getCurrentUser(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWY1Zjk2MWU0NDY3NWYwNGFjMGZkNCIsImlhdCI6MTU4NzUwMzQxMCwiZXhwIjoxNTg4MTA4MjEwfQ.YCQctkw76xPB6uv9RsoMae_MsTEVQb1huaXKrfkqHzk",
        "5e9f6dee1e44675f04ac0fde"
      );
      console.log("shit", shit);
      const userPoints = shit.data.user.points;
      setPoints(userPoints);
      console.log("userPoints", userPoints);
    })();
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

  const cardList = [
    {
      title: "Солодощі",
      imgName: 1,
      source: "../../assets/image/prizesImg/1.jpg",
      taskPoints: 40,
    },
    {
      title: "Похід у кіно",
      imgName: 2,
      source: "../../assets/image/prizesImg/2.jpg",
      taskPoints: 90,
    },
    {
      title: "Подарунок",
      imgName: 3,
      source: "../../assets/image/prizesImg/3.jpg",
      taskPoints: 100,
    },
    {
      title: "Вечір піци",
      imgName: 4,
      source: "../../assets/image/prizesImg/4.jpg",
      taskPoints: 80,
    },
    {
      title: "Вечірка з друзями",
      imgName: 5,
      source: "../../assets/image/prizesImg/5.jpg",
      taskPoints: 120,
    },
    {
      title: "Похід у McDonalds",
      imgName: 6,
      source: "../../assets/image/prizesImg/6.jpg",
      taskPoints: 80,
    },
    {
      title: "Бажання",
      imgName: 7,
      source: "../../assets/image/prizesImg/7.jpg",
      taskPoints: 200,
    },
    {
      title: "Похід на ковзанку",
      imgName: 8,
      source: "../../assets/image/prizesImg/8.jpg",
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
              <ProgressBar userPoints={points} />
            </div>
          </div>
        </div>
        <CardListUl cardList={cardList} />
        <div className={css.awardsButtonWrapper}>
          {modal ? (
            <>
              <AwardsModal
                prizes={prizes}
                openModaled={modal}
                useOutsideAlerter={useOutsideAlerter}
              />
              <button className={css.awardsButton} onClick={openModal} disabled>
                Підтвердити
              </button>
            </>
          ) : (
            <button className={css.awardsButton} onClick={openModal}>
              Підтвердити
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
