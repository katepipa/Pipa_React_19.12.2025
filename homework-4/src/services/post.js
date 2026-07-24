import axios from "axios";

const API = `https://6a301852a7f8866418d59770.mockapi.io/posts`;

const service = {
  get: (id) => axios(id ? `${API}/${id}` : API).then(({ data }) => data),
  put: (id, obj) => axios.put(`${API}/${id}`, obj).then(({ data }) => data),
  delete: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),
  post: (obj) => axios.post(API, obj).then(({ data }) => data),
};

export default service;
