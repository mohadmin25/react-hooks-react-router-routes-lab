
import React, { useState } from "react";
import { movies } from "../data";

function Movies() {
  // const {title,time,genres} = movies

  return <div>
    <h1>Movies Page</h1>
    {movies.map((perMovie) => (
      <div key={perMovie.title} >
        <h2>{perMovie.title}</h2>
        <p> Runtime : {perMovie.time}</p>
        <ul>
          {perMovie.genres.map((genre)=> <li key={genre} >{genre}</li> )}
        </ul>
      </div>
    ))}
  </div>;
}

export default Movies;