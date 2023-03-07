import axios from "axios";
import { MOCK_DATA } from "./mock_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class MovieAPI {
    static async fetchPopulars() {
        // const res = await axios.get(`${BASE_URL}movie/popular${API_KEY_PARAM}`)
        // console.log(res.data.results)
        // return res.data.results;

        return MOCK_DATA
    }
}