import { useState, useEffect } from "react";
import starshipsData from "../../Data/Starship.json";
import type{ StarshipResponse } from "../../types/Starship";
import type{ Starship } from "../../types/Starship";
import { getStarships } from "../../api/getStarships";

export function MyAppStarships() {
  
    
    // const response: StarshipResponse = starshipsData;
    // const render = response.results.map((starship) => <p key={starship.name}>{"name:"+starship.name +" | model:"+ starship.model}</p>);
  const [starships, setStarships] = useState<Starship[]>([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    getStarships().then((data:StarshipResponse) => {
      setStarships(data.results);
    });
    console.log("call useEffect");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(previousState=> { console.log("Interval", previousState); return previousState + 1});
     
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log("render V2", starships);

  return (
    <div>
      <h1>My App Starships</h1>

      <p>Count: {count}</p>
      {starships.map((starship) => <p key={starship.name}>{starship.name}</p>)}
    </div>
  );
  
}
