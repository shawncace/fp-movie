
const Movie = ({movies}) => {
  return (  
    <>
      {movies.map((movie)=>(
        <p key={movie.id}>
          {movie.title}
        </p>
      ))}
    </>
  );
}
 
export default Movie;