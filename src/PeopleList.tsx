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
    const [people, setPeople] = useState<People[]>([{
        name: 'Ernesto'
    }, {
        name: 'Manuel'
    }]);

    //[<span>Ernesto</span>, <span>Manuel</span>]
    const render = people.map((p) =>  <div>{p.name}</div>);

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