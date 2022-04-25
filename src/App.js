import './App.css'
import {A} from "./components/A";
import {createContext} from "react";

// export let MyContext = createContext(null)   // For Object
export let MyContext = createContext('defaultValue')

function App() {
    let data = 'context data'; // Can be an Object

    return (
        <>  {/* Context should to wrap main component */}
            App component   {/* Putt data in context */}
            <MyContext.Provider value={data}>
                <A/>    {/* All its child can take data */}
            </MyContext.Provider>
        </>
    );
}

export default App;
