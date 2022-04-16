import axios from 'axios';

const apiUrl = process.env.REACT_APP_API
const axios_service = axios.create({baseURL:apiUrl});

export {axios_service}