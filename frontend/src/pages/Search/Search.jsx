import React from 'react'
import "./Search.css"
import Footer from '../../components/Footer/Footer'


const Search = ({id, name, description, tag, genre, picture, director, country}) => {
            
  console.log(name)

  return (
    <div className='search'>
      <div className="search-container">
        <div className="search-container-info">
          <h2>Будущее название {name} </h2>{
            
              console.log(name)
          }
          <li>Страна {country}</li>
          <li>Директор {director}</li>
          <div className="film-image">
          </div>
          <li>Описание {description}</li>
          <li>Теги {tag}</li>
          <li>Жанры {genre}</li>
        </div>
        <div className="search-container-btns">
          <button className='dislike'>dislike</button>
          <button className='like'>like</button>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Search
