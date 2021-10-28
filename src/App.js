import{useState,useEffect} from 'react'

import Movie from "./components/Movie";

function App() {
  const [movies, setMovies]=useState([])

  const getMovies = async()=>{
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=7f919e4b3db2895f7100385f409e09a1'

    const urlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=7f919e4b3db2895f7100385f409e09a1&query=star%20wars'

    const response = await fetch(urlSearch)
    const data = await response.json()

    console.log(data.results)
    setMovies(data.results)
    
    
    
  }

  

  useEffect(()=>{
    getMovies()
  },[])
  
  return (
    <div>
      <Movie movies={movies} />
    </div>
  );
}

export default App;
