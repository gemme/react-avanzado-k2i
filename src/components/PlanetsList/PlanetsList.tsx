import { useState, useEffect } from "react";
import type { Planet } from "../../types/Planets";
import type { Person } from "../../types/Person";
import { getPerson } from "../../api/getPersons";
import { getPlanets } from "../../api/getPlanets";

export function PlanetsList() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        setIsLoading(true);
        const data = await getPlanets();
        setPlanets(data.results);

        const allResidents: Person[] = [];
        for (const planet of data.results) {
          const ids = (planet.residents ?? [])
            .map((resident) => resident.split('/').filter(Boolean).pop())
            .filter((id): id is string => Boolean(id));

          const planetResidents = await Promise.all(
            ids.map((id) => getPerson(id))
          );
          allResidents.push(...planetResidents);
        }
        setPersons(allResidents);
      } catch (err) {
        setError("Error al cargar los planetas");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlanets();
  }, []);

  if (isLoading) return <p>Cargando planetas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Planets List</h1>
      {planets.map((planet) => (
        <div key={planet.name}>
          <p>{planet.name}: {planet.population} inhabitants.</p>
          <ul>
            {persons
              .filter((person) => planet.residents?.some((resident) => resident === person.url))
              .map((person) => (
                <p key={person.url}>****
                  {person.name} - {person.height} - {person.birth_year}
                ****</p>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}