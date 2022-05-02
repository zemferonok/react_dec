import React from 'react';
import {useDispatch} from "react-redux";
import {dogsActions} from "../redux/slices/dog_slice";

const Dog = ({dog}) => {
    let dispatch = useDispatch();

    return (
        <div>
            {dog.name}
            {/*<button onClick={()=>dispatch(dogsActions.setDogForUpdate({name: dog.name, id: dog.id}))}>update</button>*/}
            <button onClick={()=>dispatch(dogsActions.setDogForUpdate(dog))}>update</button>
            <button onClick={()=>dispatch(dogsActions.deleteDog({id: dog.id}))}>delete</button>
        </div>
    );
};

// export default Dog;
export {Dog};