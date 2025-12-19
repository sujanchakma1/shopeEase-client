import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
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
