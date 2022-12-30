import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import './Movie.css'
import MovieCard from "../../components/movieCard/MovieCard"

const searchUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = "api_key=eab0fdc30dffb44286cc9348afce2be6"

const Movie = () => {
  const  {id} = useParams()
  const [movie,setMovies] = useState(null)

  const getMovie = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data)
  }

  useEffect(()=>{
    const urlMovie = `${searchUrl}${id}?${apiKey}`
    getMovie(urlMovie)
  },[])

  const format = (number) =>{
    return number.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    })
  }
  return (
    <div className="movie-page">{movie && (<>
    
      <MovieCard movie={movie} showLink={false} />
      <p className="tagline">{movie.tagline}</p>
      <div className="info">
          <h3>
            <BsWallet2/> Orçamento:
          </h3>
          <p>{format(movie.budget)}</p>
      </div>
      <div className="info">
          <h3>
            <BsGraphUp/> Receita:
          </h3>
          <p>{format(movie.revenue)}</p>
      </div>
      <div className="info">
          <h3>
            <BsHourglassSplit/> Duração:
          </h3>
          <p>{movie.runtime} minutos</p>
      </div>
      <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill/> Descrição:
          </h3>
          <p>{movie.overview}</p>
      </div>
    </>)}</div>
  )
}

export default Movie