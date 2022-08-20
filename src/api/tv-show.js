import axios from "axios"

const DEFAULT_PARAMS = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`

export class TVShowAPI {

    static async fetchPopulars() {
        return (await (axios.get(`${process.env.REACT_APP_API_BASE_URI}tv/popular?${DEFAULT_PARAMS}`))).data.results
    }
    static async fetchRecommendationsById(showId) {
        return (await (axios.get(`${process.env.REACT_APP_API_BASE_URI}tv/${showId}/recommendations?${DEFAULT_PARAMS}`))).data.results
    }

    static async fetchByTerm(term) {
        return (await (axios.get(`${process.env.REACT_APP_API_BASE_URI}search/tv?query=${term}&${DEFAULT_PARAMS}`))).data.results
    }

    static async fetchById(tvShowId) {
        return (await (axios.get(`${process.env.REACT_APP_API_BASE_URI}tv/${tvShowId}?${DEFAULT_PARAMS}`))).data.results
    }
}