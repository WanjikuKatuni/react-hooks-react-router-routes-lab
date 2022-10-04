import React from "react";
import { movies } from "../data";

function Movies() {


  let theMovies = movies.map((movie)=>(
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    {/*{code here}*/}
    <h1>Movies Page</h1>
    <React.Fragment>
      {theMovies}
    </React.Fragment>
    </div>;
}

export default Movies;
