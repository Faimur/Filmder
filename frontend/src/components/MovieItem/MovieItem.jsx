import React, { useState } from 'react'
import './MovieItem.css'
import Search from '../../pages/Search/SearchPages/Search'
import { Navigate, useNavigate } from 'react-router-dom'
import { movie_list } from '../../assets/genre'
import { genre_list } from '../../assets/genre'
import { tags_list } from '../../assets/genre'
import { directir_list } from '../../assets/genre'
import { country_list } from '../../assets/genre'
import SearchPages1 from '../../pages/Search/SearchPages/SearchPages1'
import SearchPages2 from '../../pages/Search/SearchPages/SearchPages2'
import SearchPages3 from '../../pages/Search/SearchPages/SearchPages3'
import SearchPages4 from '../../pages/Search/SearchPages/SearchPages4'
import SearchPages5 from '../../pages/Search/SearchPages/SearchPages5'

const MovieItem = ({id, name, description, tag, genre, picture, director, country}) => {
  
  const navigate = useNavigate();
  
  const[isOpen1, setIsOpen1] = useState(false);
  const[isOpen2, setIsOpen2] = useState(false);
  const[isOpen3, setIsOpen3] = useState(false);
  const[isOpen4, setIsOpen4] = useState(false);
  const[isOpen5, setIsOpen5] = useState(false);

  function toggle(){
    if(id===1) setIsOpen1((isOpen1) => !isOpen1);
    else if (id===2) setIsOpen2((isOpen2) => !isOpen2);
    else if (id===3) setIsOpen3((isOpen3) => !isOpen3);
    else if (id===4) setIsOpen4((isOpen4) => !isOpen4);
    else if (id===5) setIsOpen5((isOpen5) => !isOpen5);
  }

  return (
    <div className='movie-item'>
        <div className="movie-item-img-container">
            <img className="movie-item-image" src={picture} alt="" />
        </div>
        <div className="movie-item-info">
            <div className="movie-item-name-info">
                <h3 onClick={toggle}>{name}</h3>
                {isOpen1 && <SearchPages1/>}
                {isOpen2 && <SearchPages2/>}
                {isOpen3 && <SearchPages3/>}
                {isOpen4 && <SearchPages4/>}
                {isOpen5 && <SearchPages5/>}
                
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
