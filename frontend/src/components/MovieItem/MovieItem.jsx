import React from 'react'
import './MovieItem.css'

const MovieItem = ({id, name, image, genre}) => {



  return (
    <div className='movie-item'>
        <div className="movie-item-img-container">
            <img className="movie-item-image" src={image} alt="" />
        </div>
        <div className="movie-item-info">
            <div className="movie-item-name-rating">
                <p>{name}</p>
            </div>
            <p className="film-item-genre">{genre}</p>
        </div>
    </div>
  )
}

export default MovieItem
