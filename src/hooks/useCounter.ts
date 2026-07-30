
import { useState, useEffect } from 'react';

export type UseCounterResult = [number];


export const useCounter = (timeoutMS: number = 1000): UseCounterResult  => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const id = setInterval(() => {
            console.log('useEffect');
            setCount((prevCount) => prevCount + 1);
            
        }, timeoutMS);
        return () => {
            console.log('clear interval');
            clearInterval(id);
        };
    // si no hay deps -> [], por lo tanto se ejecuta una sola vez en el montaje
    }, []);

    return [count];
}