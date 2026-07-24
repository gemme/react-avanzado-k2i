import type { Starship } from '../types/Starship';
import type { StarshipResponse } from '../types/Starship';

export async function getStarships(): Promise<StarshipResponse> {
  const data = await fetch('https://swapi.dev/api/starships/', {
    headers: {
      Accept: 'application/json',
    },
  })
  .then(function (response) {
        console.log('response starships', response);
      if(!response?.ok) {
        console.warn("WARN: No se encontró las naves");
      }
      return response.json();

    })
    .then((data: StarshipResponse) => {
        console.log('data starships', data);
      return data;
    })
    .catch((error) => {
      console.log('My promise error', error);
      throw error;
    });

  return data;
}


