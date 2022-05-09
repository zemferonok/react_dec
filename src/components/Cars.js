import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux/slices/car_slice";
import {Car} from "./Car";

const Cars = () => {
let {cars, status} = useSelector(state => state.cars)
let dispatch = useDispatch();

useEffect(()=>{
    console.log('cars/useEffect/dispatch');
    dispatch(carActions.getAll());
}, [])

    return (
        <div>
            {status && <h2>{status}</h2>}
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export {Cars};