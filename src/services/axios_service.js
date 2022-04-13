import axios from "axios";

const baseUrl = process.env.REACT_APP_API;  // Put from .env
const axiosService = axios.create({baseURL: baseUrl}); // Set main URL

export {axiosService};