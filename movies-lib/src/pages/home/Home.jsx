import { useState, useEffect } from "react"
import MovieCard from "../../components/movieCard/MovieCard"
import '../MoviesGrid.css'

const Home = () => {
  const [topMovies,setTopMovies] = useState([])

  const getTopRatedMovies = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }
  useEffect(() =>{
    const topRatedURL = `${"https://api.themoviedb.org/3/movie/"}top_rated?${"api_key=eab0fdc30dffb44286cc9348afce2be6"}`
    getTopRatedMovies(topRatedURL)
  },[])
  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length ===0 && <p> Carregando</p> }
        {topMovies.length > 0 && topMovies.map((movie)=> <MovieCard key={movie.id} movie = {movie}/>)}
      </div>
    </div>
  )
}

export default Home