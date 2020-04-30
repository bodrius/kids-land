import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import css from "./awardsPage.module.css";
import { services } from "../../services/services";
import AwardsModal from "./../awardsModal/AwardsModal";
import CardListUl from "./../cardList/CardListUl";
import ProgressBar from "./../progressBar/ProgressBar";
import { pointUser } from "../../redux/auth/operations";
import { Footer } from "../Footer/Footer";
import animation from "./awardsModalAnimation.module.css";

const AwardsPage = () => {
  const { userToken, userId, userPoint, weekPoints } = useSelector((state) => {
    return state.user;
  });
  const [points, setPoints] = useState(userPoint);
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState([]);
  const [pointsTotal, setPointsTotal] = useState(null);
  const [fail, setFail] = useState(false);
  const dispatch = useDispatch();
  console.log("points ------ !!!", points);
  useEffect(() => {
    if (pointsTotal > points) {
      setFail(true);
    } else {
      setFail(false);
    }
  }, [modal]);

  useEffect(() => {
    setModal(false);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.keyCode === 27) {
        setModal(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const chooseAwards = (title, imgName, isOn, taskPoints) => {
    if (isOn) {
      setToggle(toggle.filter((elem) => elem.imgName !== imgName));
    } else {
      setToggle([...toggle, { title, imgName, taskPoints }]);
    }
  };

  const collectAwards = async () => {
    if (points > pointsTotal) {
      const calculatedPoints = Number(points) - Number(pointsTotal);
      await services.updateUserPoints(userToken, userId, calculatedPoints);
      await setPoints(calculatedPoints);
      await dispatch(pointUser(calculatedPoints));
    }
  };

  const pointsToModal = () => {
    const stopRightThereCriminalScum = toggle.map((card) => card.taskPoints);
    if (toggle[0]) {
      const countingPoints = stopRightThereCriminalScum.reduce(function (
        previousValue,
        currentValue,
        index,
        array
      ) {
        return previousValue + currentValue;
      });
      setPointsTotal(countingPoints);
    } else {
      setPointsTotal(0);
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
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
              <ProgressBar userPoints={points} weekPoints={weekPoints} />
            </div>
          </div>
        </div>
        <CardListUl
          cardList={cardList}
          chooseAwards={chooseAwards}
          toggle={toggle}
          pointsToModal={pointsToModal}
        />
        <div className={css.awardsButtonWrapper}>
          <CSSTransition
            in={modal}
            classNames={animation}
            timeout={500}
            unmountOnExit
          >
            <div className={css.backdropDiv}>

                <AwardsModal
                  prizes={toggle}
                  openModaled={modal}
                  useOutsideAlerter={useOutsideAlerter}
                  pointsTotal={pointsTotal}
                  closeModal={closeModal}
                  collectAwards={collectAwards}
                  fail={fail}
                />

            </div>
          </CSSTransition>
          {modal ? (
            <>
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
        <Footer />
      </div>
    </div>
  );
};

export default AwardsPage;
