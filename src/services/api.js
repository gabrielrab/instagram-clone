import axios from "axios";

const api = axios.create({
  baseURL: "https://codeby-backend.herokuapp.com"
});

export default api;