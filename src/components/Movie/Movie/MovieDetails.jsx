import React from 'react';
import { Typography, Divider, Avatar } from '@mui/material';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movieContainer">
      <div className="movieDetails">
        <img src={movie.imageUrl} alt={movie.title} className="movieImage" />
        <div className="movieInfo">
          <Typography variant="h4">{movie.title}</Typography>
          <Typography variant="subtitle1">Actori: {movie.actors.join(', ')}</Typography>
          <Typography variant="subtitle1">Durata: {movie.duration}</Typography>
        </div>
      </div>
      <div className="descriptionContainer">
        <Typography variant="h5">Descriere</Typography>
        <Divider />
        <Typography>{movie.description}</Typography>
      </div>
      <div className="castContainer">
        <Typography variant="h5" className="castTitle">
          Distribuție
        </Typography>
        <Divider />
        <ul className="castList">
          {movie.actors.map((actor, index) => (
            <li key={index} className="castItem">
              <Avatar className="castAvatar">{actor[0]}</Avatar>
              <Typography className="castName">{actor}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
