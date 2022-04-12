import axios from "axios";

const baseUrl = process.env.REACT_APP_API;
const axiosService = axios.create({baseURL: baseUrl});

export {axiosService};