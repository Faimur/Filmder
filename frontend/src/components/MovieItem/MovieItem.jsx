import React from 'react'
import './MovieItem.css'
import Search from '../../pages/Search/Search'

const MovieItem = ({id, name, description, tag, genre, picture, director, country}) => {


  return (
    <div className='movie-item'>
        <div className="movie-item-img-container">
            <img className="movie-item-image" src={picture} alt="" />
        </div>
        <div className="movie-item-info">
            <div className="movie-item-name-info">
                <a href="#" onClick={() =>{
                  console.log(name);
                  <Search key={id} name={name} description={description} tag={tag} genre={genre} picture={picture} director={director} country={country}/>
                }}><h3>{name}</h3></a>
                
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
