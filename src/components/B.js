import React, {useContext} from 'react';
import {MyContext} from "../App";

const B = () => {
    let contextValue = useContext(MyContext)
    // Taking data from Context by hook

    return (
        <div>
            B component
            <div>{contextValue}</div>
        </div>
    );
};

export {B};