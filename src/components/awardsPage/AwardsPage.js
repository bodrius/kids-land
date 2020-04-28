import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./awardsPage.module.css";
import { services } from "../../services/services";
import AwardsModal from "./../awardsModal/AwardsModal";
import CardListUl from "./../cardList/CardListUl";
import ProgressBar from "./../progressBar/ProgressBar";
import { pointUser } from "../../redux/auth/operations";
import { Footer } from "../Footer/Footer";

const AwardsPage = () => {
  const { userToken, userId, userPoint } = useSelector((state) => {
    return state.user;
  });
  const [points, setPoints] = useState(userPoint);
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState([]);
  const dispatch = useDispatch();

  const chooseAwards = (title, imgName, isOn) => {
    if (isOn) {
      setToggle(toggle.filter((elem) => elem.imgName !== imgName));
    } else {
      setToggle([...toggle, { title, imgName }]);
    }
  };

  const collectAwards = async (updatedPoints) => {
    await services.updateUserPoints(userToken, userId, 700);
    await setPoints(updatedPoints);
    await dispatch(pointUser(updatedPoints));
    // console.log("points", points);
  };

  useEffect(() => {
    setModal(false);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      console.log("e", e.key);
      if (e.keyCode === 27) {
        setModal(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const openModal = () => {
    setModal(true);
  };

  // useEffect(() => {
  //   (async () => {
  //     const shit = await services.getCurrentUser(userToken);
  //     console.log('shit', shit)
  //     const userPoints = shit.data.user.points;
  //     setPoints(userPoints)
  //     // services.updateUserPoints(userToken, userId, 100);
  //   })();
  // }, []);

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

  const cardList = [
    {
      _id: 1,
      title: "Солодощі",
      imgName: 1,
      source: "../../assets/image/prizesImg/1.jpg",
      taskPoints: 40,
    },
    {
      _id: 2,
      title: "Похід у кіно",
      imgName: 2,
      source: "../../assets/image/prizesImg/2.jpg",
      taskPoints: 90,
    },
    {
      _id: 3,
      title: "Подарунок",
      imgName: 3,
      source: "../../assets/image/prizesImg/3.jpg",
      taskPoints: 100,
    },
    {
      _id: 4,
      title: "Вечір піци",
      imgName: 4,
      source: "../../assets/image/prizesImg/4.jpg",
      taskPoints: 80,
    },
    {
      _id: 5,
      title: "Вечірка з друзями",
      imgName: 5,
      source: "../../assets/image/prizesImg/5.jpg",
      taskPoints: 120,
    },
    {
      _id: 6,
      title: "Похід у McDonalds",
      imgName: 6,
      source: "../../assets/image/prizesImg/6.jpg",
      taskPoints: 80,
    },
    {
      _id: 7,
      title: "Бажання",
      imgName: 7,
      source: "../../assets/image/prizesImg/7.jpg",
      taskPoints: 200,
    },
    {
      _id: 8,
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
            <img
              src={require(`../../assets/image/icon/presentBox/gift-box.png`)}
              alt="gift-box"
              width={26}
              height={26}
            />
            <span className={css.awardsHeaderText}>Мої призи</span>
          </div>
          <div className={css.awardsHeaderBarContainer}>
            <div className={css.awardsHeaderBar}>
              <ProgressBar userPoints={points} />
            </div>
          </div>
        </div>
        <CardListUl
          cardList={cardList}
          chooseAwards={chooseAwards}
          collectAwards={collectAwards}
        />
        <div className={css.awardsButtonWrapper}>
          {modal ? (
            <>
              <AwardsModal
                prizes={toggle}
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
      <Footer/>
      </div>
    </div>
  );
};

export default AwardsPage;
