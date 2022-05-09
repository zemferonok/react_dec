import axios from "axios";

const baseUrl = process.env.REACT_APP_API;
const axiosService = axios.create({baseURL: baseUrl})
let url = '/cars'
const carService = {
    getAll: () => {
        return axiosService.get(url).then(value => value.data)
    },
    getById: (id) => {
        return axiosService.get(url + '/' + id).then(value => value.data)
    },
    create: (carObj) => {
        return axiosService.post(url, carObj).then(value => value.data)
    },
    deleteById: (id) => {
        return axiosService.delete(url + '/' + id).then(value => value.data)
    },
    updateById: (id, carObj) => {
        return axiosService.put(url + '/' + id, carObj).then(value => value.data)
    }
}

export {carService}