import {useFetch} from '../../hooks/useFetch';
import type { PokemonSpeciesPage } from '../../types/PokemonSpecies';
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

    // { data: {  }  }
    const { data } = useFetch<PokemonSpeciesPage>({url: 'https://pokeapi.co/api/v2/pokemon-species/'});


    //[<div>Ernesto</div>, <div>Manuel</div>]
    const render = data?.results.map((p, index) =>  <div key={p + '-' + index} className='title-primary'>{p.name}</div>);

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
