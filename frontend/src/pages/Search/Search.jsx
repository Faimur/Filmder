import React from 'react'
import "./Search.css"
import Footer from '../../components/Footer/Footer'


const Search = ({name}) => {
            
  console.log(name)

  return (
    <div className='search'>
      <div className="search-container">
        <div className="search-container-info">
          <h2>{name} </h2>{
            
              console.log(name)
          }
          <li>Страна {}</li>
          <li>Директор {}</li>
          <div className="film-image">
          </div>
          <li>Описание {}</li>
          <li>Теги {}</li>
          <li>Жанры {}</li>
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
