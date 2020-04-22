
import types from "./types";

// export const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];
//     // case types.FILTER_CONTACT:
//     //   const filt = state.filter(contact =>
//     //     contact.name.toLocaleLowerCase().includes(payload)
//     //   );
//     //   console.log("filter", filt);
//     //   return filt;
//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const handlers = {
  [types.ADD_CONTACT]: (state, { payload }) => [...state, payload],
  [types.DELETE_CONTACT]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  DEFAULT: state => state
};

export const contacts = (state = [], actions) => {
  const handler = handlers[actions.type] || handlers.DEFAULT;
  return handler(state, actions);
  // return { contacts: handler(state, actions) };
};

