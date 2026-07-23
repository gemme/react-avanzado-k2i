import type { Starship } from '../types/Starship';

export async function getStarshipById(id:string): Promise<Starship> {
  const data = await fetch('https://swapi.dev/api/starships/' + id, {
    headers: {
      Accept: 'application/json',
    },
  })
  .then(function (response) {
        console.log('response starships', response);
      if(!response?.ok) {
        console.warn(`[WARN] No se encontró la nave con ID ${id}`);

        return{};
      }
      return response.json();

    })
    .then((data: Starship) => {
        console.log('data starships', data);
      return data;
    })
    .catch((error) => console.log('My promise error', error));

  return data;
}


