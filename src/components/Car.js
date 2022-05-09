import React from 'react';

const Car = (props) => {
    let {car} = props;
    let {id, model, price, year} = car;

    return (
        <div>
            {/*{JSON.stringify(car)}*/}
            id:{id}/model:{model}/price:{price}/year:{year}
        </div>
    );
};

export {Car};