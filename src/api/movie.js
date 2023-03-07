import axios from "axios";
import { MOCK_DATA, FAKE_RECOMMENDATIONS } from "./mock_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class MovieAPI {
    static async fetchPopulars() {
        const res = await axios.get(`${BASE_URL}movie/popular${API_KEY_PARAM}`)
        // console.log(res.data.results)
        return res.data.results;

        // return MOCK_DATA
    }

    static async fetchRecommended(movieId) {
        const res = await axios.get(`${BASE_URL}movie/${movieId}/recommendations${API_KEY_PARAM}`)
        // console.log(res.data.results)
        return res.data.results;

        // return FAKE_RECOMMENDATIONS;
    }

    static async fetchByTitle(title) {
        const res = await axios.get(`${BASE_URL}search/movie${API_KEY_PARAM}&query=${title}`)
        // console.log("search: " + res.data.results)
        return res.data.results;

    }
}