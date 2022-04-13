import React from 'react';
import {carService} from "../../services/car_service";

const Car = ({car, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = (id) => {
        carService.getById(id).then(value => console.log(value))
    }

    return (
        <div>
            id: {id}; model: {model}; price: {price}; year: {year};
            <button onClick={() => setCarForUpdate(car)}>Edit</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export {Car};