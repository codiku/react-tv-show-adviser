import axios from "axios"

export class TVShowAPI {
    static async fetchPopulars() {
        return (await (axios.get(`${process.env.REACT_APP_API_BASE_URI}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`))).data.results
    }

}