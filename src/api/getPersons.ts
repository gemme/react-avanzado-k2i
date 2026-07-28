import type { Person } from '../types/Person';

export async function getPerson(idPerson: string): Promise<Person> {
  try {
    const response = await fetch('https://swapi.dev/api/people/' + idPerson, {
      headers: {
        Accept: 'application/json',
      },
    });

    console.log('response person', response);

    if (!response.ok) {
      console.warn('WARN: No se encontro el personaje');
    }

    const data: Person = await response.json();
    console.log('data person', data);

    return data;
  } catch (error) {
    console.log('My promise error', error);
    throw error;
  }
}