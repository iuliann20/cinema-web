import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink
} from 'mdb-react-ui-kit';
export default function MovieCard() {
    return (
        <MDBCard className='mt-2'>
            <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
            <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
            <MDBCardBody>
                <MDBCardLink href='#'>Card link</MDBCardLink>
            </MDBCardBody>
        </MDBCard>
    );
}