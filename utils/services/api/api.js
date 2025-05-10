import axios from "axios";

export default axios.create({
  baseURL: process.env.SERVER_ROOT_ROUTE,

  headers: {
    "Accept-Version": 1,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "d4735e3a265e16ee2393953",
  },

  withCredentials: true,
  withXSRFToken: true,
});
