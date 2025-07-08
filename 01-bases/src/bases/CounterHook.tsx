import { useEffect, useRef, useState } from 'react'
import { useCounter } from '../hooks/useCounter';

const MAX_COUNT = 15;

interface CounterProps {
    initValue?: number;
}

const CounterHook = ({ 
    initValue = 0 
}: CounterProps) => {
    const {counter, elementToAnimate, handleClick} = useCounter({
        initValue,
        maxCount: MAX_COUNT
    });

    return (
        <>
            <h1>CounterHook</h1>
            <h2 ref={elementToAnimate}>{ counter }</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

export default CounterHook;
