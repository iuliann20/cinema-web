import React, { useState } from "react";
import MovieCard from '../../Common/MovieCard/MovieCard';
import 'bootstrap/dist/css/bootstrap.css';

export default function Movie() {

  

  const renderComponents = () => {
    const componentArray = Array.from({ length: 6 }, (_, index) => index);
    return componentArray.map((item) => (
      <div className="col-6 col-md-3 my-2" key={item} data-testid="movie-col-6">
        <MovieCard data-testid="movie-card"/>
      </div>
    ));
  };

  return (
    <div className="row mx-2" data-testid="movie-row">
      {renderComponents()}
    </div>
  );
}
