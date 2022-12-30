import axios from "axios";
let baseUrl = "http://localhost:8000/research";

export const getData = (token) => {
  return axios(baseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postData = (data, token) => {
  return axios.post(baseUrl, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteData = (id, token) => {
  return axios.delete(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
