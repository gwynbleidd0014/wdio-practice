import axios from "axios"
import data from "../../../data/api/api.data.json" assert {type: "json"}


axios.defaults.baseURL = data.baseUrl

class Api {
  async get(url) {
    return axios.get(url)
  }

  async post(url, data) {
    return axios.post(url, data)
  }

}

export default new Api()