import CinemaHall from '../Movie/CinemHall/CinemaHall';
export default function Home(){

    return(<>
    <div>
      <h1>Sala de cinema</h1>
      <CinemaHall numRows={5} numSeatsPerRow={8} />
    </div>
    </>);
}