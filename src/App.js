import './App.css'
import {CarForm} from "./components/CarForm/CarForm";
import {Cars} from "./components/Cars/Cars";
import {useState} from "react";



function App() {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
        </>
    );
}

export default App;
