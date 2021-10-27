import{useState,useEffect} from 'react'

import Movie from "./components/Movie";

function App() {
  const movies=['1','2','3']

  const getMovies = async()=>{
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=7f919e4b3db2895f7100385f409e09a1'

    const urlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=7f919e4b3db2895f7100385f409e09a1&query=star%20wars'

    const response = await fetch(url)
    const responseJson = await response.json()

    console.log(responseJson)
  }

  getMovies()
  return (
    <div>
      {movies.map((movie)=>(
        <Movie />
      ))}
    </div>
  );
}

export default App;
