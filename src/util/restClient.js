import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.api.admin_base_url,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;
