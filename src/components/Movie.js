const IMG_API = 'https://image.tmdb.org/t/p/w500'

const Movie = ({movies}) => {
  
  const setVoteClass = (vote)=>{
    if(vote >= 8){
      return 'green'
    } else if(vote>=6){
      return 'orange'
    } else{
      return 'red'
    }
  }

  return (  
    <div className='movie-container'>
      {movies.map((movie)=>(
        <div className='movie'>
          <img key={movie.id}
              alt={movie.title}
              src={IMG_API + movie.poster_path}
          />

          <div className="movie-info">
            <h3>{movie.title}</h3>
            <span className=
              {`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
          </div>

          <div className="movie-over">
            <h2>Overview:</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Movie;