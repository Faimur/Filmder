import React from 'react'
import "./Search.css"
import Footer from '../../components/Footer/Footer'


const Search = () => {
  return (
    <div className='search'>
      <div className="search-container">
        <div className="search-container-info">
          <h2>Будущее название</h2>
          <li>Страна</li>
          <li>Год?</li>
          <div className="film-image">
          </div>
          <li>Описание</li>
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
