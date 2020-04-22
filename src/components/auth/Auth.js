import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Auth.module.css";
import { registerUser, loginUser } from "../../redux/auth/operations";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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

  return (
    <div className={styles.authContainer}>
      <form className={styles.form}>
        <h2 className={styles.authHeader}>
          Виконуй завдання, отримай класні призи!
        </h2>
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
          <button
            className={styles.btn}
            value="LOGIN_USER"
            onClick={handleSubmit}
          >
            Увійти
          </button>
          <button
            className={styles.btn}
            value="REGISTR_USER"
            onClick={handleSubmit}
          >
            Зареєструватися
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
