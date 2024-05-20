
import axios from "axios";
import { perPage } from "./components/App/App.jsx";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "wO8JLyWQawNVt8VwywrgpozivyAu4ogWlFTa0UWmO38";

export async function fetchImagesByWord(inputValue, page) {
  const response = await axios.get(`/search/photos/?client_id=${API_KEY}`, {
    params: {
      query: `${inputValue}`,
      page: page,
      per_page: perPage,
      orientation: "landscape",
    },
  });
  return response.data;
}