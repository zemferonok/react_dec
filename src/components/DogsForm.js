import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {dogsActions} from "../redux/slices/dog_slice";

const DogsForm = () => {
    let dispatch = useDispatch();
    let {dogForUpdate} = useSelector(({dogsData}) => dogsData)
    // Take rootReducer(?state) and destructured from it dogsData
    // Return dogsData and destructured from it dogForUpdate(null)

    useEffect(() => {
        if (dogForUpdate) {
            setFormName(dogForUpdate.name)
        }
    }, [dogForUpdate])

    const [formName, setFormName] = useState('');

    let create = () => {
        if (dogForUpdate) {
            dispatch(dogsActions.updateDog({name: formName, id: dogForUpdate.id}))
        } else {
            dispatch(dogsActions.addDog({name: formName}));
        }
        setFormName('');
    }

    return (
        <div>
            <label>Dog Name:
                <input type="text" value={formName}
                       onChange={(event) => setFormName(event.target.value)}/></label>
            <button onClick={create}>{dogForUpdate ? 'update' : 'create'}</button>
        </div>
    );
};

export {DogsForm};