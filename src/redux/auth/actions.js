// import types from "./types";
import { createAction } from "@reduxjs/toolkit";

// export const addContact = contact => {
//   // console.log("contact", contact);
//   return { type: types.ADD_CONTACT, payload: contact };
// };

// export const filterContact = name => ({
//   type: types.FILTER_CONTACT,
//   payload: name
// });

// export const deleteContact = id => ({
//   type: types.DELETE_CONTACT,
//   payload: id
// });

export const deleteContact = createAction("DELETE_CONTACT");

export const addContact = createAction("ADD_CONTACT");
