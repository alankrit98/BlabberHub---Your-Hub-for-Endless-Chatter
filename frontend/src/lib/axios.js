import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://blabberhub-your-hub-for-endless-chatter.onrender.com/api",
  withCredentials: true,
});
