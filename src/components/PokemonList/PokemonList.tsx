import { useFetch } from '../../hooks/useFetch';
import type { PokemonSpeciesPage } from '../../types/PokemonSpecies';

export const PokemonList = () => {
    const { data } = useFetch<PokemonSpeciesPage>({
        url: 'https://pokeapi.co/api/v2/pokemon-species/',
    });

    return data?.results.map((p, index) => (
        <div key={p.name + '-' + index} className='title-primary'>
            {p.name}
        </div>
    ));
};
