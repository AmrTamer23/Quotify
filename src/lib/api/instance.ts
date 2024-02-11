import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.quotable.io/",
  timeout: 5000,
  httpsAgent: {
    rejectUnauthorized: false,
  },
  headers: {
    "Content-Type": "application/json",
  },
});
