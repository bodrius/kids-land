import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import styles from "./Auth.module.css";
import { registerUser, loginUser } from "../../redux/auth/operations";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let mainerror = null;

  const dispatch = useDispatch();

  const validate = (value) => {
    const errors = {};
    // console.log("email, password", value);
    if (!email) {
      errors.email = "Required email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password) {
      errors.password = "Required password";
    } else if (password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }
    if (errors.length) {
      mainerror = errors;
    } else {
      mainerror = null;
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    // onClick: (e) => {
    //   handleSubmit(e);
    // },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const contact = {
      email: email,
      password: password,
    };
    console.log("errors", mainerror);
    if (mainerror === null) {
      addContact(contact, e.target.value);
    } else {
      setEmail("");
      setPassword("");
    }
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

  const handleChange = async (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
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
      <div className={styles.formContainer}>
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
            placeholder={
              formik.errors.email ? formik.errors.email : "Enter Email"
            }
            onChange={handleChange}
            value={email}
          />
          {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
          <h2 className={styles.authTextInput}>Пароль</h2>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder={
              formik.errors.password ? formik.errors.password : "Enter password"
            }
            onChange={handleChange}
            value={password}
          />
          {/* {formik.errors.password ? <div>{formik.errors.password}</div> : null} */}
          <div className={styles.divFlex}>
            <div className={styles.divbtn}>
              <button
                className={styles.btn}
                type="button"
                value="LOGIN_USER"
                onClick={(e) => {
                  formik.handleSubmit();
                  handleSubmit(e);
                }}
              >
                Увійти
              </button>
            </div>
            <div className={styles.divbtn}>
              <button
                className={styles.btn}
                type="button"
                value="REGISTR_USER"
                onClick={(e) => {
                  formik.handleSubmit();
                  handleSubmit(e);
                }}
              >
                Зареєструватися
              </button>
            </div>
          </div>
        </form>
        {pLogo()}
      </div>
      {screenW()}
    </div>
  );
};

export default Auth;
