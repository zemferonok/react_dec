import Users from "./components/Users";
import King from "./components/King";
import {useState} from "react";

function App() {
    const [king, setKing] = useState(null);
    // Setter pull data from component to initial pace
    // It work witch all functions. Setter is function.

    const click = () => {
        setKing(null);
        console.log('The King is dead')
    }

    return (
        <>  {/* To catch some data need transmit setter in component */}
            <Users setKing={setKing}/>      {/* Transmit setter setKing*/}
            {king && <King king={king}/>}   {/* Check data */}
            {king && <button onClick={()=> click()}>Kill</button>}
       </>  // && show right side if left side is true
   );
}

export default App;