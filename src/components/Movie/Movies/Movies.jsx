import React, { useState } from "react";
import MovieCard from '../../../Common/MovieCard/MovieCard';
import 'bootstrap/dist/css/bootstrap.css';

export default function Movie() {

  const movies = [
    { id: 1, title: "Movie 1", description: "Description 1" },
    { id: 2, title: "Movie 2", description: "Description 2" },
    // ... adaugă mai multe filme aici
  ];

  const renderComponents = () => {
    return movies.map((movie) => (
      <div className="col-6 col-md-3 my-2" key={movie.id} data-testid="movie-col-6">
        <MovieCard movie={movie} data-testid="movie-card"/>
      </div>
    ));
  };

  return (
    <div className="container">
    <div className="row mx-2" data-testid="movie-row">
      {renderComponents()}
    </div>
    </div>
  );
}
