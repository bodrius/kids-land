import axios from "axios";
import types from "./types";
export const registerUser = (param) => async (dispatch, getState) => {
  console.log("param", param);
  const data = await axios.post(
    `https://kidslike.goit.co.ua/api/auth/signup`,
    param,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  console.log("data", data);

  dispatch({ type: types.REGISTR_USER, payload: data.data });
};
