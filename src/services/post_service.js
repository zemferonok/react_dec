import {axios_service} from "./axios_service";

const postService = {
    getAll: () => axios_service.get('/posts').then(value => value.data),
    getById: (id) => axios_service.get('/posts/' + id).then(value => value.data)
}

export {postService}