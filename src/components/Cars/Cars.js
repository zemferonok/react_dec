import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car_service";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
        // carService.getAll().then(value => setCars(prevState => [...prevState, value]));
    }, [])

    const click = (array) => {
      array.map(value => carService.deleteById(value.id))
    }

    return (
        <div>
            Cars
            <button onClick={() => click(cars)}>Dell All</button>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};