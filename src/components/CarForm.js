import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../redux/slices/car_slice";

const CarForm = () => {
    const {reset, handleSubmit, register} = useForm();

    let dispatch = useDispatch();

    const submit = async (newCar) => {
        await dispatch(carActions.create({carObj:newCar}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="text" {...register('price')}/></label></div>
            <div><label>Year: <input type="text" {...register('year')}/></label></div>
            <button>do</button>
        </form>
    );
};

// export default CarForm;
export {CarForm};