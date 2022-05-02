import {createSlice} from "@reduxjs/toolkit";

const initState = {dogs: [], dogForUpdate: null}

let dogSlice = createSlice({
    name: 'dogShit',
    initialState: initState,
    reducers: {
        addDog: (state, action) => {
            // let newDog = {name:action.payload.name, id:new Date().getTime()};
            let {name} = action.payload;
            let newDog = {name: name, id: new Date().getTime()};
            state.dogs.push(newDog);
        },

        deleteDog: (state, action) => {
            // let index = state.dogs.findIndex((dog)=>dog.id === action.payload.id);
            let {id} = action.payload;
            let index = state.dogs.findIndex((dog) => dog.id === id);
            state.dogs.splice(index, 1);

            // state.dogs.filter(value => value.id !== action.payload.id);
            // The same, but another way. The upper method is more light.
        },

        setDogForUpdate: (state, action) => {
            // state.dogForUpdate = action.payload;
            let dog = action.payload;
            state.dogForUpdate = dog;
        },

        updateDog: (state, action) => {
            // let index = state.dogs.findIndex(value => value.id === action.payload.id);
            // state.dogs[index] = action.payload;
            let {name, id} = action.payload;
            let index = state.dogs.findIndex(value => value.id === id);
            state.dogs[index].name = name;
            state.dogForUpdate = false;
        }
    }
})

const {reducer: dogsReducer, actions: {addDog, deleteDog, setDogForUpdate, updateDog}} = dogSlice;
// Rename REDUCER to dogsReducer, destructuring data from actions

const dogsActions = {addDog, deleteDog, setDogForUpdate, updateDog};
// Make dogsActions for easy export and using into dispatch

export {dogsReducer, dogsActions}