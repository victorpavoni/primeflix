// BASE DA API: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=07fd8a1e708c38287d7038d0f97de92e&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
