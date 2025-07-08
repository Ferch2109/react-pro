import { useState } from 'react'

interface CounterByProps {
    initValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

const CounterBy = ({ 
    initValue = 0 
}: CounterByProps) => {
    const [{ counter, clicks }, setCounter] = useState<CounterState>({
        counter: initValue,
        clicks: 0
    });

    const handleClick = (increment = 1) => {
        setCounter( ({ clicks, counter }) => ({
            counter: counter+increment,
            clicks: clicks+1
        }));
    }

    return (
        <>
            <h1>CounterBy: { counter }</h1>
            <h1>Clicks: { clicks }</h1>
            <button onClick={() => handleClick()}> +1 </button>
            <button onClick={() => handleClick(5)}> +5 </button>
        </>
    )
}

export default CounterBy;
