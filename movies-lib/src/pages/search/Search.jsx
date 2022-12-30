import { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../../components/movieCard/MovieCard"
import '../MoviesGrid.css'

const searchUrl = "https://api.themoviedb.org/3/search/movie/"
const apiKey = "eab0fdc30dffb44286cc9348afce2be6"

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies,setMovies] = useState([])
  const query = searchParams.get("q")
  const getSearchedMovies = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  }
  useEffect(() =>{
    const searchWithdUrl = `${searchUrl}?api_key=${apiKey}&query=${query}`
    getSearchedMovies(searchWithdUrl)
  },[query])

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length ===0 && <p> Carregando</p> }
        {movies.length > 0 && movies.map((movie)=> <MovieCard key={movie.id} movie = {movie}/>)}
      </div>
    </div>
  )
}

export default Search