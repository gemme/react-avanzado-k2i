import { useState } from "react";
import { getStarshipById } from "../../api/getStarshipByid";

export function MyAppHomeWork() {
  const [starshipName, setStarshipName] = useState('Choose a starship');
    
   const handleStarshipSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
       const id = e.target.value;
       getStarshipById(id).then((data) => {
         setStarshipName(data?.name ?? '');
       });
     };

  return (
    <div>
      <h1>My App HomeWork</h1>
      <input type="text" placeholder="Ingresa ID" onChange={handleStarshipSearch} />
      <h3>{starshipName ? `You Starship: ${starshipName}` : 'No starship found'}</h3>
    </div>
  );
}
