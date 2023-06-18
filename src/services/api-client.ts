import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "90ceec3e40be4c75915cccc624169417",
  },
});
