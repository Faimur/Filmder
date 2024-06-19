import React, { useState } from 'react'
import "./Search.css"
import { movie_list } from '../../../assets/genre'
import { genre_list } from '../../../assets/genre'
import { tags_list } from '../../../assets/genre'
import { country_list } from '../../../assets/genre'
import { directir_list } from '../../../assets/genre'
import Footer from '../../../components/Footer/Footer'

const SearchPages2 = () => {
  const [mark, setMark] = useState("none")

  const obj = movie_list[1]
  console.log(obj)
  let genre_name;
  genre_list.map((itemG, GenreID) => {
      if(GenreID === obj.GenreID - 1) 
      {genre_name = itemG.Name}
   })

  let tag_name;
  tags_list.map((itemT, TagID) => {
      if(TagID === obj.TagID - 1) 
      {tag_name = itemT.Name}
  })
  let director_name;
  directir_list.map((itemD, DirectorID) => {
      if(DirectorID === obj.DirectorID - 1) 
      {director_name = itemD.Name}
  })

  let country_name;
  country_list.map((itemC, CountryID) => {
      if(CountryID === obj.CountryID - 1) 
      {country_name = itemC.Name}
  })

return (
  <div className='search'>
    <div className="search-container">
      

      <div className="search-container-info">
      {/*<h2>Название {obj.Name} </h2>*/}
        <li>Страна {country_name}</li>
        <li>Директор {director_name}</li>
        <li>Описание {obj.Description}</li>
        <li>Теги {tag_name}</li>
        <li>Жанры {genre_name}</li>
      </div>
      <div className="search-container-btns">
        <button id='dislike' onClick={() => setMark("dislike")} className={mark==="dislike"?"activeD":""}>dislike</button>
        <button id='like' onClick={() => setMark("like")} className={mark==="like"?"activeL":""}>like</button>
      </div>
    </div>

  </div>
)
}

export default SearchPages2
