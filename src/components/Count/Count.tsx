// core the react hooks
// built-in hooks, useState, useEffect, useCallback, useMemo, React compiler
import { useState, useEffect } from 'react';
import { FormatCount } from './FormatCount';
import { FormatCountTimeout } from './FormatCountTimeout';
import { useCounter } from '../../hooks/useCounter';

export const Count = () => {
    // arrays, objects, maps, sets
    // tipo primitivos en js, number, string (chars), boolean
    //const [count, setCount] = useState<number>(0);

    const [countTimeout, setCountTimeout] = useState<number>(0);
    const [count] = useCounter();
    // class components 
    // mount -> montaje - didMount
    // update -> actualizacion - didUpdate
    // unmount -> desmontaje - wilUnmount

    // function components - built-in hooks - useEffect
    // mount -> montaje - useEffect en sus deps arreglo vacio - y se ejecuta una sola vez en el montaje
    // update -> actualizacion - useEffect valores en el arreglo que son deps, pueden props o valores del state
    // unmount -> desmontaje - useEffect, return () => clearInterval


    // esto se reemplaza un custom que se llama
    // useCounter
    /* useEffect(() => {
        const id = setInterval(() => {
            console.log('useEffect');
            setCount((prevCount) => prevCount + 1);
            
        }, 1000);
        return () => {
            console.log('clear interval');
            clearInterval(id);
        };
    // si no hay deps -> [], por lo tanto se ejecuta una sola vez en el montaje
    }, []); */

    useEffect(() => {

        const id = setTimeout(()=> {
            setCountTimeout(currentState => currentState + 1);
        }, 1000);

        return () => clearTimeout(id);
        
    }, [countTimeout]);

    // JSX
    return (
        <>
            <FormatCount count={count}/>
            <FormatCountTimeout countTimeout={countTimeout}/>
        </>
    );
}
