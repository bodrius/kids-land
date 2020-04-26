import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";
import styles from "./userInfo.module.css";

export const UserInfo = () => {
  const name =
    localStorage.getItem("userName") !== null &&
    JSON.parse(localStorage.getItem("userName")).length > 0
      ? JSON.parse(localStorage.getItem("userName"))
      : "User";

  const text = useRef(`${name}`);

  const handleChange = (evt) => {
    text.current = evt.target.value;
    if (text.current.length > 10) text.current = text.current.substr(0, 10);
    localStorage.setItem("userName", JSON.stringify(text.current));
  };

  const handleKeyPress = (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      localStorage.setItem("userName", JSON.stringify(text.current));
    }
  };

  return (
    <ContentEditable
      html={text.current}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      className={styles.userName}
    />
  );
};
