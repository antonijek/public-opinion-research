import axios from "axios";

export const getData = () => {
  return axios("http://localhost:8000/research");
};
