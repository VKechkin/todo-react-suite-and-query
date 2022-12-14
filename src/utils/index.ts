import axios from "axios";

const URL = process.env.REACT_APP_URL || "";

export const requestInstance = axios.create({
  baseURL: URL,
});
