import axios from "axios";

const baseURL = "https://kidslike.goit.co.ua/api";

export const services = {
  async createUser(user) {
    try {
      const data = await axios({
        url: `${baseURL}/auth/signup`,
        method: "post",
        headers: { "content-type": "application/json" },
        data: user,
      });
      return data;
    } catch (error) {
      // throw new Error(error);
      console.log(error);
    }
  },

  async userSignIn(user) {
    try {
      const data = await axios({
        url: `${baseURL}/auth/signin`,
        method: "post",
        headers: { "content-type": "application/json" },
        data: user,
      });
      return data;
    } catch (error) {
      // throw new Error(error);
      console.log(error);
    }
  },

  async getCurrentUser(token) {
    try {
      const data = await axios({
        url: `${baseURL}/auth/current`,
        method: "get",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateUserPoints(token, userID, points) {
    try {
      const data = await axios({
        url: `${baseURL}/users/points/${userID}`,
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { points },
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createUserTask(token, task) {
    try {
      const data = await axios({
        url: `${baseURL}/tasks`,
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: task,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateUserTask(token, taskID, update) {
    try {
      const data = await axios({
        url: `${baseURL}/tasks/${taskID}`,
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: update,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
