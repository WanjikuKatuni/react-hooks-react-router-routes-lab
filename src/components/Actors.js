import React from "react";
import { actors } from "../data";

function Actors() {
  let theActor = actors.map((actor)=>(
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return <div className="navbar">
    {/*{code here}*/}
    <h1>Actors Page</h1>
    <React.Fragment>
      {theActor}
    </React.Fragment>
  
  </div>;
}

export default Actors;
