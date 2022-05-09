import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services/car_service";

// If in slice-actions is async await then use creatAsyncThunk
// The Result need to catch in extra reducers
const getAll = createAsyncThunk(
    'carShit/getAll',
    // async ({input data},{additional option1, option2, ...})
    async (_, {rejectWithValue}) => {
        try {
            let data = await carService.getAll()
            console.log(data);
            // Send action.payload to [getAll.fulfilled] in extraReducers
            return data;
        } catch (err) {
            console.log('catch error');
            // Send action.payload to [getAll.rejected] in extraReducers
            return rejectWithValue({message: err.message, responseData: err.response.data})
        }   // rejectWithValue - help to send action.payload of the error date to [getAll.rejected]
    }
)

const create = createAsyncThunk(
    'carShit/create',   // Also can import dispatch
    async ({carObj}, {rejectWithValue, dispatch})=>{
        try {
            let data = await carService.create(carObj);
            console.log(data);
            // await dispatch(getAll());     // For updating page data
            return data;
        } catch (err) {
            console.log('catch error');
            return rejectWithValue({message: err.message, responseData: err.response.data})
        }
    }
)

const initState = {cars: [], updateCar: null, status: null};

const carSlice = createSlice({
    name: 'carShit',
    initialState: initState,
    reducers: {},
    // One more variant of extra reducers (Better)
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getAll.pending, (state, action) => {
    //             console.log('-pending- getAll');
    //             state.status = 'Loading';
    //         })
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             ...
    //         })
    // }
    extraReducers: {
        // Work when start getAll action
        [getAll.pending]: (state, action) => {
            console.log('-pending- getAll');
            state.status = 'Loading';
        },
        // Work when finish getAll action
        [getAll.fulfilled]: (state, action) => {
            console.log('-fulfilled- getAll');
            state.status = 'Complete';
            state.cars = action.payload;
        },
        // Work when getAll action has error
        [getAll.rejected]: (state, action) => {
            console.log('-rejected- getAll');
            console.log('message: ', action.payload.message);
            console.log('responseData: ', action.payload.responseData);
            console.log(action.payload)
            state.status = 'Error';
        },
        [create.pending]: (state, action) => {
            console.log('-pending- create');
            state.status = 'Loading';
        },
        [create.fulfilled]: (state, action) => {
            console.log('-fulfilled- create');
            state.status = 'Complete';
            state.cars.push(action.payload);
        },
        [create.rejected]: (state, action) => {
            console.log('-rejected- create');
            console.log(action.payload.message);
            console.log(action.payload.responseData);
            state.status = 'Error';
        },
    }
})

const {reducer: carReducers, actions: {}} = carSlice;
const carActions = {getAll, create};

export {carReducers, carActions};