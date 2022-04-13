import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/car_service";

const CarForm = ({setNewCar, carForUpdate}) => {
    const {register, handleSubmit, reset, setValue} = useForm();

    const mySubmit = async (data) => {
        console.log(data)       // All data from form
        const response = await carService.post(data)
        console.log(response)   // Response data with ID
        setNewCar(response);    // Send data for re-render page
        reset()                 // Clear all fields of Form
    }

    useEffect(() => {     // SetValue in field
        if (carForUpdate) {     // Check for NULL data
            const {model, price, year} = carForUpdate;  // Data for setting
            setValue('model', model)    // Set in field 'model'
            setValue('price', price)    // Set in field 'price'
            setValue('year', year)      // Set in field 'year'
        }
    }, [carForUpdate])

    return (
        <form onSubmit={handleSubmit(mySubmit)}>    {/* Make prevent default and some more */}
            <label>Model: <input type="text" {...register('model')}/></label> {/* Has a base fields */}
            <label>Prise: <input type="text" {...register('price', {valueAsNumber: true})}/></label>
            <label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label>
            <button>send</button>
            {/* As default all Form's input data is string */}
        </form>
    );
};

export {CarForm};