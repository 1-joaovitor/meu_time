import axios from "axios";

const api = axios.create({
  baseURL: "https://api-football-beta.p.rapidapi.com",
});
export default api;
