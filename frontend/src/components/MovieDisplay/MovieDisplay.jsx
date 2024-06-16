import React, { useContext } from 'react'
import './MovieDisplay.css'
import { movie_list } from '../../assets/genre'
import MovieItem from '../MovieItem/MovieItem'

const MovieDisplay = (category) => {

  return (
    <div className='film-display'id='film-display'> 
      <h2>Top films for you</h2>
      <div className="film-display-list">
        {movie_list.map((item, index)=>{
          return <MovieItem key={index} id={item.MovieID} name={item.Name} description={item.Description} tag={item.TagID} genre={item.GenreID} picture={item.Picture} director={item.DirectorID} country={item.CountryID}/>
        })}
      </div>
      <hr />
    </div>
  )
}

export default MovieDisplay
