import {axiosService} from "./axios_service";
import {urls} from "../constants/urls";

const carService = {    // CRUD operations (create read update delete)
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    getById: (id) => axiosService.get(urls.cars + '/' + id).then(value => value.data),
    post: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar).then(value => value.data),
    deleteById: (id) => axiosService.delete(urls.cars + '/' + id).then(value => value.data),
}

export {carService}