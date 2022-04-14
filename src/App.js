import './App.css'
import {CarForm} from "./components/CarForm/CarForm";
import {Cars} from "./components/Cars/Cars";
import {useState} from "react";

function App() {
    const [update, setUpdate] = useState(null);
    const updater = {update, setUpdate}

    return (
        <>
            <CarForm updater={updater}/>
            <hr/>
            <Cars updater={updater}/>
        </>
    );
}

export default App;
