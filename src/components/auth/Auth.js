import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Auth.module.css";

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

    await dispatch({
      type: value,
      payload: contact,
    });
    await setEmail("");
    await setPassword("");
  };

  const handleChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div>
      <form className={styles.form}>
        <h2>AUTH</h2>
        <h2>Email</h2>
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={email}
        />
        <h2>Пароль</h2>
        <input
          className={styles.input}
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={password}
        />
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
      </form>
    </div>
  );
};

export default Auth;
