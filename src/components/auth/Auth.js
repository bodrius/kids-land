import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Auth.module.css";
import { registerUser, loginUser } from "../../redux/auth/operations";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   return screenW();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      email: email,
      password: password,
    };
    addContact(contact, e.target.value);
  };

  const addContact = async (contact, value) => {
    console.log(contact, value);
    if (value === "REGISTR_USER") {
      dispatch(registerUser(contact));
    } else if (value === "LOGIN_USER") {
      dispatch(loginUser(contact));
    }

    await setEmail("");
    await setPassword("");
  };

  const handleChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
    console.log("hello");
  };

  const pLogo = () => {
    const width = document.body.clientWidth;
    if (width > 767) {
      return (
        <div className={styles.plogo}>
          <p>KidsLike</p>
          <img
            className={styles.logoimg}
            src={require("../../assets/image/authimages/logo.png")}
            alt="logo"
          />
          <p>| Робимо життя батьків і дітей ізі : | 2019</p>
        </div>
      );
    }
  };

  const screenW = () => {
    const width = document.body.clientWidth;
    if (width < 768) {
      return (
        <img
          className={styles.mobimg}
          src={require("../../assets/image/authimages/mobileImg.jpg")}
          alt="mobileimg"
        />
      );
    } else if (width < 1200) {
      return (
        <img
          className={styles.mobimg}
          src={require("../../assets/image/authimages/tabletimg.jpg")}
          alt="tabletimg"
        />
      );
    } else {
      return (
        <img
          className={styles.mobimg}
          src={require("../../assets/image/authimages/mainimg.jpg")}
          alt="maintimg"
        />
      );
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authHeader}>
        Виконуй завдання, отримай класні призи!
      </h2>
      <form className={styles.form}>
        <h2 className={styles.authText}>
          Ви можете авторизуватися за допомогою e-mail та паролю, попередньо
          зареєструвавшись
        </h2>
        <h2 className={styles.authTextInput}>Email</h2>
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={email}
        />
        <h2 className={styles.authTextInput}>Пароль</h2>
        <input
          className={styles.input}
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={password}
        />
        <div className={styles.divFlex}>
          <div className={styles.divbtn}>
            <button
              className={styles.btn}
              value="LOGIN_USER"
              onClick={handleSubmit}
            >
              Увійти
            </button>
          </div>
          <div className={styles.divbtn}>
            <button
              className={styles.btn}
              value="REGISTR_USER"
              onClick={handleSubmit}
            >
              Зареєструватися
            </button>
          </div>
        </div>
      </form>
      {pLogo()}
      {screenW()}
    </div>
  );
};

export default Auth;
