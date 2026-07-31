import { useFetch } from '../../hooks/useFetch';
import type { PokemonSpeciesPage } from '../../types/PokemonSpecies';
import { Spinner } from '../Common/Spinner';
import './PokemonList.css';

export const PokemonList = () => {
    const { data, loading, error } = useFetch<PokemonSpeciesPage>({
        url: 'https://pokeapi.co/api/v2/pokemon-species/'
    });

    console.log(loading);
    
    if(loading){
        return (<Spinner />);
    }

    if(error){
        return <span className='error'>{error}</span>
    }

    return data?.results.map((p, index) => (
        <div key={p.name + '-' + index} className='title-primary'>
            {p.name}
        </div>
    ));
};
