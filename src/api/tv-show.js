import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDED } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    // console.log(response.data.results);
    // return response.data.results;
    return FAKE_POPULARS;
  }

  static async fetchRecommendationsById(tvShowId) {
    //return (
    //   await axios.get(
    //     `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    //   )
    // ).data.results;
    return FAKE_RECOMMENDED;
  }
}
