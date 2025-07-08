import { useState } from 'react'

interface CounterProps {
    initValue?: number;
}

const Counter = ({ 
    initValue = 0 
}: CounterProps) => {
    const [counter, setCounter] = useState(initValue);

    const handleClick = () => setCounter(prev => prev+1);

    return (
        <>
            <h1>Counter: { counter }</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

export default Counter;
