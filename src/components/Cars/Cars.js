import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car_service";
import {Car} from "../Car/Car";

const Cars = ({updater}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
        // carService.getAll().then(value => setCars(prevState => [...prevState, value]));
    }, [updater.update])

    const dellAll = async (array) => {
        await Promise.all(array.map(value => carService.deleteById(value.id)));
        carService.getAll().then(value => setCars([...value]));
    }

    return (
        <div>
            Cars
            <button onClick={() => dellAll(cars)}>Dell All</button>
            {cars.map(car => <Car key={car.id} car={car} updater={updater}/>)}
        </div>
    );
};

export {Cars};