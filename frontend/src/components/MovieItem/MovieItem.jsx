import React, { useState } from 'react'
import './MovieItem.css'
import Search from '../../pages/Search/Search'
import { Navigate, useNavigate } from 'react-router-dom'

const MovieItem = ({id, name, description, tag, genre, picture, director, country}) => {
  
  const navigate = useNavigate();
  const [movie, setMovie] = useState("All");

  return (
    <div className='movie-item'>
        <div className="movie-item-img-container">
            <img className="movie-item-image" src={picture} alt="" />
        </div>
        <div className="movie-item-info">
            <div className="movie-item-name-info">
                <h3 onClick={() =>{
                  console.log(name);
                  movie=name;
                  <Search name={movie}/>
                  
                }}>
                {name}
                </h3>
                
            </div>
            <p className="film-item-description">{description}</p>
            <div className="film-item-filter">
              <p className="film-item-tag">{tag}</p>
              <p className="film-item-genre">{genre}</p>
            </div>
            <div className="film-item-information">
              <p className="film-item-country">{country}</p>
              <p className="film-item-director">{director}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieItem
