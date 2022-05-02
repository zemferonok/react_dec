import {useSelector} from "react-redux";
import {Dog} from "./Dog";

const Dogs = () => {
    // let dogsArray = useSelector((state) => state.dogsData.dogs)
    let {dogs} = useSelector(({dogsData})=>dogsData)
    // Take rootReducer(?state) and destructured from it dogsData
    // Return dogsData and destructured from it dogs(array)



    return (
        <div>
            {
                dogs.map(value => <Dog key={value.id} dog={value}/>)
            }
        </div>
    );
};

export {Dogs};