import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css'

export const CounterWithCustomHook = () => {

    const factor = 15;
    const {state, increment, reset, decrement} = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr/>
            <button onClick={ () => {increment(factor)}} className="btn ">+ {factor}</button>
            <button onClick={ reset} className="btn "> Reset </button>
            <button onClick={ () => {decrement(factor)}} className="btn ">- {factor}</button>
        </>
    )
}