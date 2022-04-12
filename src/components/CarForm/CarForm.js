import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm();
    // handlerSubmit make prevent default and some more
    // register has a base fields of form and help with them
    // reset is making Form's fields of inputs empty

    const mySubmit = (data) => {
        console.log(data)   // Take all data from form with useForm
        reset()
    }

    return (
        <form onSubmit={handleSubmit(mySubmit)}>    {/* As default all Form's input data is string */}
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Prise: <input type="text" {...register('prise', {valueAsNumber:true})}/></label>
            <label>Year: <input type="text" {...register('year', {valueAsNumber:true})}/></label>
            <button>send</button>
        </form>
    );
};

export {CarForm};