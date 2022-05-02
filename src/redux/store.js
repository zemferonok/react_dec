import { combineReducers, configureStore } from '@reduxjs/toolkit';

import catsReducer from './slices/cat_slice';   // Import as default
import {dogsReducer} from './slices/dog_slice';

const rootReducer = combineReducers({
    cats: catsReducer,
    dogsData: dogsReducer
});

export const store = configureStore({
    reducer: rootReducer
})