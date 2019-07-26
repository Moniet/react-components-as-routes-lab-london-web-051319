import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {movies.map(movie =>
          <div>
            <div>{movie.title}</div>
            <div>{movie.time}</div>
            <div>{movie.genres.join(", ")}</div>
          </div>
        )}
    </div>
  );
};

export default Movies;
