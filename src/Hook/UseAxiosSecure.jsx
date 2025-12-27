import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "https://shopeease-server.vercel.app",
});

axiosSecure.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});
const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
