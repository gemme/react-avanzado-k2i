//import { useState, useEffect } from "react";
import PlanetsResponse from "../../Data/PlanetsResponse.json";
//import type { Planet } from "../../types/Planet";
//import type { PlanetResponse } from "../../types/Planet";
//import { getPlanets } from "../api/getPlanets";

export function PlanetsList() {
  return (
    <div>
      <h1>Planets List</h1>
      {PlanetsResponse.results.map((planet) => <p key={planet.name}>{planet.name}</p>)}
    </div>
  );
}
