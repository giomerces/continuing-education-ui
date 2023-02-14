import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

const get = (url, params) => {
  let res = instance.get(url, { params });
  return res;
};

const post = (url, data) => {
  let res = instance.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

const api = {
  get,
  post,
};

export default api;
