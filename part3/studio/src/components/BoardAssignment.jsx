import { useState } from 'react';
import boards from "./boards";

export default function BoardAssignment () {
   // const boards = [];
   const [boardName, setName] = useState('no boards yet!')

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((item)=> {
            return (
               <option value={item.value}>{item.label}</option>
            )
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
