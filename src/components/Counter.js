import React, {useReducer} from 'react';

const initialValue = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement' :
            return state - 1;
        case 'reset' :
            return initialValue;
        default:
            return state
    }
    // return newState;
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialValue)
    // [state, setAction] = ...(advancedSetState, initialState)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>dispatch('increment')}>inc</button>
            <button onClick={()=>dispatch('decrement')}>dec</button>
            <button onClick={()=>dispatch('reset')}>res</button>
        </div>
    );
};

export {Counter};