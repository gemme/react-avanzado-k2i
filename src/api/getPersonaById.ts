import type { Persona } from '../types/Persona';

export function getPersonaById(id: string): Promise<Persona | void> {
  return fetch('https://swapi.dev/api/people/' + id, {
    headers: {
      Accept: 'application/json',
    },
  })
    //callback
    .then(function (response) {
      return response.json();
      //.then((data: Persona) => console.log(data));
    })
    .then((data: Persona) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log('My promise error', error));
}
