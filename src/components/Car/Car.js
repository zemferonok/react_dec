import React from 'react';

const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            id: {id}; model: {model}; price: {price}; year: {year};
        </div>
    );
};

export {Car};