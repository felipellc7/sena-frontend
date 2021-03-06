import axios from "axios";
import {
  API_URL,
} from "./env"

const axiosClient = new axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;