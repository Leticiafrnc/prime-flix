import axios from "axios";
// base da url: http://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=aee08889ed1563a1c66e84e4fa563cf0&language=pt-BR

const api = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
});
export default api;
