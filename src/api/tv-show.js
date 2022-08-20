import axios from "axios"

const DEFAULT_PARAMS = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

export class TVShowAPI {

    static async fetchPopulars() {
        return (await (axios.get(`${process.env.REACT_APP_API_BASE_URI}tv/popular?${DEFAULT_PARAMS}`))).data.results
    }
    static async fetchRecommendations(showId) {
        return (await (axios.get(`${process.env.REACT_APP_API_BASE_URI}tv/${showId}/recommendations?${DEFAULT_PARAMS}`))).data.results
    }
}