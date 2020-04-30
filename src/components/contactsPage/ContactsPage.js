import React from "react";
import styles from "./ContactsPage.module.css";
import { Contacts } from "./ContactsInformation";
import { Footer } from "../Footer/Footer";

 const ContactsPage = (props) => {
   console.log('props', props.history)
  return (
    <>
    <div className={styles.contacts}>
      <p className={styles.contacts_main_tittle}>Наша команда</p>
      <p className={styles.contacts_second_tittle}>
        Завжди готові до нових викликів!
      </p>
      <ul className={styles.contacts_all_card}>
        {Contacts.map(contact => (
          <li className={styles.contacts_card} key={contact.id}>
            <img
              className={styles.contacts_img}
              src={contact.foto}
              alt="img"
              width="300"
              height="360"
            />
            <p className={styles.contacts_name}>{contact.name}</p>
            <p className={styles.contacts_possition}>{contact.position}</p>
            <p className={styles.contacts_mail}>{contact.contacts}</p>
            <p className={styles.contacts_possition_describe}>
              {contact.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
      <Footer/>
      </>
  );
};


export default ContactsPage;