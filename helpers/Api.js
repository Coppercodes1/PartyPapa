import axios from "axios";
import { Authorization, BaseUrl, AppVersion } from "../services/utils";

export default axios.create({
  baseURL: "http://206.189.134.218:4058",
  headers: {
    authorization: "bnVsbDpudWxs",
    "Content-Type": "application/json"
  },
});