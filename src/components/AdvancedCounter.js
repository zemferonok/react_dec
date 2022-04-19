import React, {useReducer} from 'react';

const initialValue = {  // InitialValue can being object
    counter_1: 0,       // Action also can being object
    counter_2: 10       // >> dispatch can take object
}
const reducer = (state, action) => {
    const {type, value} = action;

    switch (type) {
        case 'firstCounter':
            return {...state, counter_1: state.counter_1 + value};
        case 'secondCounter':
            return {...state, counter_2: state.counter_2 + value};
        case 'reset':
            return initialValue;
        default:
            console.log('Unknown action.TYPE')
            return state;
    }
}

const AdvancedCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <h1>Advanced C1:{state.counter_1} ___ C1:{state.counter_2}</h1>
            <button onClick={() => dispatch({type: 'firstCounter', value: 1})}>inc_1</button>
            <button onClick={() => dispatch({type: 'firstCounter', value: -1})}>dec_1</button>
            <button onClick={() => dispatch({type: 'secondCounter', value: 10})}>inc_2</button>
            <button onClick={() => dispatch({type: 'secondCounter', value: -10})}>dec_2</button>
            <button onClick={() => dispatch({type: 'reset'})}>res all</button>
        </div>
    );
};

// export default AdvancedCounter;
export {AdvancedCounter};