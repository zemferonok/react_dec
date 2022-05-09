import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducers} from "./slices/car_slice";

const rootReducer = combineReducers({
    cars: carReducers,
})

const store = configureStore({
    reducer: rootReducer
})

export {store}