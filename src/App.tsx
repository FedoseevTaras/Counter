import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {

    const [countNumber, setCountNumber] = useState(0)
    const [stopCounting, setStopCounting] = useState(false)

    const addNumber = (number: number) => {
        let newNumber = number + 1
        if (newNumber < 5) {
            setCountNumber(newNumber)
        } else {
            setCountNumber(newNumber)
            setStopCounting(true)
        }

    }
    const resetCounting = () => {
        setCountNumber(0)
        setStopCounting(false)
    }
    return (
        <div className="App">
            <Counter countNumber={countNumber}
                     addNumber={addNumber}
                     resetCounting={resetCounting}
                     stopCounting={stopCounting}/>
        </div>
    );
}

export default App;
