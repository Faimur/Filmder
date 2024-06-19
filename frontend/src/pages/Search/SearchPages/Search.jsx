import React, { useState } from 'react'
import "./Search.css"
import Footer from '../../../components/Footer/Footer'


const Search = () => {
  

  const [mark, setMark] = useState("none")
  return (
    <div className='search'>
      <div className="search-container">
        <div className="search-container-info">
          <h2>Название {} </h2>
          <li>Страна {}</li>
          <li>Директор {}</li>
          <div className="film-image">
          </div>
          <li>Описание {}</li>
          <li>Теги {}</li>
          <li>Жанры {}</li>
        </div>
        <div className="search-container-btns">
          <button id='dislike' onClick={() => setMark("dislike")} className={mark==="dislike"?"activeD":""}>dislike</button>
          <button id='like' onClick={() => setMark("like")} className={mark==="like"?"activeL":""}>like</button>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Search
