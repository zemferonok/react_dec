import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    // register - has a many base fields

    const mySubmit = (data) => {
        try {               // Working if it has no error
            console.log(data)       // All data from form
            // SEND DATA TO SERVER...
            reset()                 // Clear all fields of Form
        } catch (error) {   // Working if it has error
            console.log(error.response.data)
        }
    }

    const someSet = () => {
        setValue('name', 'Lolita')  // Set in field 'name'
        setValue('age', 16)         // Set in field 'age'
    }

    return (
        <form onSubmit={handleSubmit(mySubmit)}>  {/* Make prevent default and some more */}
            <label>Name: <input type="text" {...register('name')}/></label>
            <label>Age: <input type="text" {...register('age', {valueAsNumber: true})}/></label>
            <button>Submit</button>
            {/* As default all Form's input data is string */}
            <a href="#" onClick={someSet}>setValue</a>
        </form>
    );
};

export {Form};