import React, { useContext } from 'react'
import './MovieDisplay.css'
import { FilmContext } from '../../context/FilmContext'
import MovieItem from '../MovieItem/MovieItem'

const MovieDisplay = ({category}) => {

    const{ movie_list } = useContext(FilmContext)

  return (
    <div className='film-display'id='folm-display'> 
      <h2>Top films for you</h2>
      <div className="filmdisplay-list">
        {movie_list.map((item, index) => {
            return <MovieItem key={index} id={item.Movie_id} name={item.Movie_name} genre={item.Genre_id} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default MovieDisplay
