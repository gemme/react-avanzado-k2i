import {useState} from 'react';

interface Address {
    street: string;
    streetNumber: number;
}

interface People{
    name: string;
    lastName?: string;
    address?: Address;
}

export const PeopleList = () => {
    const [people] = useState<People[]>([{
        name: 'Ernesto'
    }, {
        name: 'Manuel'
    }]);

    //[<div>Ernesto</div>, <div>Manuel</div>]
    const render = people.map((p) =>  <div className='title-primary'>{p.name}</div>);

    /*
    render.push(<div>{'Luis'}</div>);

    render.forEach(element =>{
        const result  = (
        <div> 
            <>element</>
            <div>{'Jose'}</div>
        </div>
        );
        render.push(result)
    });
    */

    return render;
}
