import type { Planet } from '../types/Planets';
import type { PlanetsResponse } from '../types/Planets';

export async function getPlanets(): Promise<PlanetsResponse> {
  const data = await fetch('https://swapi.dev/api/planets/', {
    headers: {
      Accept: 'application/json',
    },
  })
  .then(function (response) {
        console.log('response planets', response);
      if(!response?.ok) {
        console.warn("WARN: No se encontró las naves");
      }
      return response.json();

    })
    .then((data: PlanetsResponse) => {
        console.log('data planets', data);
      return data;
    })
    .catch((error) => {
      console.log('My promise error', error);
      throw error;
    });

  return data;
}


