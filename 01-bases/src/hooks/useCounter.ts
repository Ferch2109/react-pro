import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';

interface CounterHookProps {
    initValue?: number;
    maxCount?: number;
}

export const useCounter = ({
    initValue = 1,
    maxCount = 10
}: CounterHookProps) => {
    const [counter, setCounter] = useState(initValue);
    const elementToAnimate = useRef(null);
    const tl = useRef(gsap.timeline());

    const errorLog = 'color: red; background-color: black;'

    //The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
    useLayoutEffect(() => {
        if (!tl.current) return;
        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                  .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
                  .pause();
    }, []);

    useEffect(() => {
        tl.current.play(0);
    }, [counter]);
    
    const handleClick = () => {
        setCounter(prev => Math.min(prev+1, maxCount));
    }

    return {
        counter,
        elementToAnimate,
        handleClick,
    }
}