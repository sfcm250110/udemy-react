import { useState } from 'react';

export const useCounter = (intialState = 10) => {
    const [state, setState] = useState(intialState);

    const increment = (factor = 1) => {
        setState(state + factor);
    }

    const reset = () => {
        setState(intialState);
    }

    const decrement = (factor = 1) => {
        setState(state - factor);
    }

    return {
        state,
        increment,
        reset,
        decrement
    };
}