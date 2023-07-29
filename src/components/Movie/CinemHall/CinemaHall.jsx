import React, { useState } from 'react';
import './CinemaHall.css'; // Stilurile pentru componentă

const CinemaHall = ({ numRows, numSeatsPerRow }) => {
  // Inițializăm o matrice bidimensională pentru a urmări starea fiecărui scaun (ocupat, selectat sau liber)
  const [seatStatus, setSeatStatus] = useState(
    Array(numRows)
      .fill()
      .map(() => Array(numSeatsPerRow).fill('liber'))
  );

  // Funcție pentru a schimba starea unui scaun atunci când este selectat
  const handleSeatClick = (row, seat) => {
    setSeatStatus((prevSeatStatus) => {
      const newSeatStatus = [...prevSeatStatus];
      if (prevSeatStatus[row][seat] === 'liber') {
        newSeatStatus[row][seat] = 'selectat';
      } else if (prevSeatStatus[row][seat] === 'selectat') {
        newSeatStatus[row][seat] = 'liber';
      }
      return newSeatStatus;
    });
  };

  return (
    <div className="cinema-hall">
      {seatStatus.map((rowStatus, rowIndex) => (
        <div key={rowIndex} className="row">
          {rowStatus.map((seat, seatIndex) => (
            <div
              key={seatIndex}
              className={`seat ${seat}`}
              onClick={() => handleSeatClick(rowIndex, seatIndex)}
            >
              {seatIndex + 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CinemaHall;
