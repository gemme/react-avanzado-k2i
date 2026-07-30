import { useEffect } from 'react';

interface FormatCountProps {
    count: number;
}

export const FormatCount = (props: FormatCountProps) => {
    // mount
    useEffect(()=>{
        console.log('montaje');
    }, []);

    // updating
    useEffect(()=>{
        console.log('actualizacion',props.count );
    }, [props.count]);

    // unmouting
    useEffect(()=>{
        // se ejecuta al desmontar
        return () => console.log('unmounting',props.count );
    }, []);

    return <div style={{
        fontSize: 'xx-large'
    }}>{'Count: ' + props.count}</div>
}
