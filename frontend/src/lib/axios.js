import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://blabberhub-your-hub-for-endless-chatter.onrender.com/api" : "/api",
  withCredentials: true,
});
