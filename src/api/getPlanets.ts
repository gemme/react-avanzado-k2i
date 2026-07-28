import type { Planet } from '../types/Planets';
import type { PlanetsResponse } from '../types/Planets';

export async function getPlanets(): Promise<PlanetsResponse> {
  try {
    const response = await fetch('https://swapi.dev/api/planets/', {
      headers: {
        Accept: 'application/json',
      },
    });

    console.log('response planets', response);

    if (!response.ok) {
      console.warn('WARN: No se encontraron planetas');
    }

    const data: PlanetsResponse = await response.json();
    console.log('data planets', data);

    return data;
  } catch (error) {
    console.log('My promise error', error);
    throw error;
  }
}