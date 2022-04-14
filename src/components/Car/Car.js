import React from 'react';
import {carService} from "../../services/car_service";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const deleteCar = (id) => {
        carService.deleteById(id).then();
        console.log(id + ' deleted');
    }

    return (
        <div>
            id: {id}; model: {model}; price: {price}; year: {year};
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export {Car};