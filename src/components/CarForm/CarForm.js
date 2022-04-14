import {useForm} from "react-hook-form";

import {carService} from "../../services/car_service";
import {useState} from "react";

const CarForm = ({updater}) => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const [responseError, setResponseError] = useState();

    const mySubmit = async (data) => {
        try {
            const response = await carService.post(data)
            console.log(response)
            await updater.setUpdate(response.id)
            reset()
            setResponseError(null)
        } catch (error) {
            console.log(error.response.data)
            setResponseError(error.response.data)
        }
    }

    const someSet = () => {
        setValue('model', 'defaultModel');
        setValue('price', '1000');
        setValue('year', '2000');
    }

    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Prise: <input type="text" {...register('price', {valueAsNumber: true})}/></label>
            <label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label>
            <button>send</button>
            <a href="#" onClick={() => someSet()}>setValue</a>
            {responseError && <p>{JSON.stringify(responseError)}</p>}
        </form>
    );
};

export {CarForm};