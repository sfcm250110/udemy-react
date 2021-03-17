import { useState } from 'react';

export const useCounter = (intialState = 10) => {
    
    const [counter, setCounter] = useState(intialState);

    const increment = () => {
        setCounter(counter + 1);
    }

    const reset = () => {
        setCounter(intialState);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    };
}