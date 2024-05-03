import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bf81e37f28b348ce99aea2444aecffa1"
  }
});
