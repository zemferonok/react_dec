import {axiosService} from "./axios_service";
// Axios is like FETCH but with benefits and less complicated
// In every CRUD operation to main URL can de added additional URL

const url = '/users';   // Additional URL
const userService = {   // CRUD operations (create read update delete)
    getAll: () => axiosService.get(url).then(value => value.data),
    getById: (id) => axiosService.get(url + '/' + id).then(value => value.data),
    post: (user) => axiosService.post(url, user).then(value => value.data),
    updateById: (id, newUser) => axiosService.put(url + '/' + id, newUser).then(value => value.data),
    deleteById: (id) => axiosService.delete(url + '/' + id).then(value => value.data),
}

export {userService}