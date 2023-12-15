import axios from "axios";

const baseurl = "https://api.themoviedb.org/3";
const api_key = "721dcbecb736affb7fed795eb24bdc81";
// https://api.themoviedb.org/3/trending/all/day?api_key=721dcbecb736affb7fed795eb24bdc81

const getTrendingVideos = axios.get(
  this.baseurl + "/trending/all/day?api_key" + api_key
);

export default {
  getTrendingVideos,
};
