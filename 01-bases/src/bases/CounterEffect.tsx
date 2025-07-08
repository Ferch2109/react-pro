import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

const MAX_COUNT = 10;

interface CounterProps {
    initValue?: number;
}

const CounterEffect = ({ 
    initValue = 0 
}: CounterProps) => {
    const [counter, setCounter] = useState(initValue);
    const counterElement = useRef<HTMLHeadingElement>(null);
    const errorLog = 'color: red; background-color: black;'

    useEffect(() => {
        if (counter >= MAX_COUNT) {
            console.log('%cSe llegó al valor máximo', errorLog);

            const tl = gsap.timeline();
            tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
              .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
        }
    }, [counter]);
    
    const handleClick = () => {
        setCounter(prev => Math.min(prev+1, MAX_COUNT));
    }

    return (
        <>
            <h1>CounterEffect</h1>
            <h2 ref={counterElement}>{ counter }</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

export default CounterEffect;
