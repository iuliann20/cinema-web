import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink
} from 'mdb-react-ui-kit';
import routes from '../../utils/routes';

import { Link as RouterLink } from 'react-router-dom';

export default function MovieCard({ movie }) {
    return (
        <MDBCard className='mt-2'>
          <MDBCardImage position='top' alt={movie.title} src={movie.imageURL} />
          <MDBCardBody>
            <MDBCardTitle>{movie.title}</MDBCardTitle>
            <MDBCardText>{movie.description}</MDBCardText>
          </MDBCardBody>
          <MDBCardBody>
            <Link href='#' to={`${routes.moviePage}/${movie.id}`}>Card link</Link>
          </MDBCardBody>
        </MDBCard>
      );
}
