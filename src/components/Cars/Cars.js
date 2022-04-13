import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car_service";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars(value))
    }, [])  // Also can yse for re-render

    useEffect(() => {
        if (newCar) {   // Check for NULL data
            // setCars([...cars, newCar]); // The same
            setCars(prevState => [...prevState, newCar]);
        }
    }, [newCar])    // Use DEPS for re-rending page

    return (
        <div>
            Cars
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};