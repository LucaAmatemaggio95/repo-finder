import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.GITHUB_PAT
  }
});

export default instance;
