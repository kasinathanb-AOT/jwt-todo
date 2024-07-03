import axios from "axios";
import { GETTASK_API, LOGIN_API, SIGNUP_API } from "./api";

export const userLogin = async (userName, password) => {
  try {
    const response = await axios.post(`${LOGIN_API}`, {
      userName,
      password,
    });
    return response;
  } catch (error) {
    console.error("Error while logging in", error);
  }
};

export const userSignup = async (userData) => {
  const { userName, password, phoneNumber, email, fullName } = userData;

  try {
    const response = await axios.post(`${SIGNUP_API}`, {
      userName,
      password,
      fullName,
      phoneNumber,
      email,
    });
    return response;
  } catch (error) {
    return { error: "Username already exists" };
  }
};

export const getTasks = async (token) => {
  try {
    const response = await axios.get(`${GETTASK_API}`, {
      headers: { Authorization: `${token}` },
    });
    return response
  } catch (error) {
    console.log("error fetching the tasks", error);
    return error
  }
};
