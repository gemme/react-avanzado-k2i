import { useState } from "react";
import starshipsData from "../../Data/Starship.json";
import type{ StarshipResponse } from "../../types/Starship";

export function MyAppStarships() {
  
    
    const response: StarshipResponse = starshipsData;
    const render = response.results.map((starship) => <p key={starship.name}>{"name:"+starship.name +" | model:"+ starship.model}</p>);

  return (
    <div>
      <h1>My App Starships</h1>
      {render}
      {/* {starshipsData.results.map((starship) => <p key={starship.name}>{"name:"+starship.name +" | model:"+ starship.model}</p>)} */}
    </div>
  );
  
}
