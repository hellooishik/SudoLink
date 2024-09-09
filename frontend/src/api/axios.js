import axios from "axios";

// Create an Axios instance with a base URL
const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
});

export default instance;
