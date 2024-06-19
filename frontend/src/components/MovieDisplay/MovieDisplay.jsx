import React, { useContext, useState } from 'react'
import './MovieDisplay.css'
import { movie_list } from '../../assets/genre'
import { tags_list } from '../../assets/genre'
import { genre_list } from '../../assets/genre'
import { country_list } from '../../assets/genre'
import { directir_list } from '../../assets/genre'
import MovieItem from '../MovieItem/MovieItem'

const MovieDisplay = ({category}) => {

  return (
    <div className='film-display'id='film-display'> 
      <h2>Top films for you</h2>
      <div className="film-display-list">
        {movie_list.map((item, index)=>{
          
          let genre_name;
          genre_list.map((itemG, GenreID) => {
            if(GenreID === item.GenreID - 1) 
              {genre_name = itemG.Name}
          })

          let tag_name;
          tags_list.map((itemT, TagID) => {
            if(TagID === item.TagID - 1) 
              {tag_name = itemT.Name}
          })
          let director_name;
          directir_list.map((itemD, DirectorID) => {
            if(DirectorID === item.DirectorID - 1) 
              {director_name = itemD.Name}
          })

          let country_name;
          country_list.map((itemC, CountryID) => {
            if(CountryID === item.CountryID - 1) 
              {country_name = itemC.Name}
          })

          if(category==="All"||category===genre_name) {

            return <MovieItem key={index} id={item.MovieID} name={item.Name} description={item.Description} 
            tag={/*item.TagID = tags_list.map((itemT, TagID) => {if (TagID === item.TagID - 1) {return itemT.Name}})*/tag_name} 
            genre={/*item.GenreID = genre_list.map((itemG, GenreID) => {if(GenreID === item.GenreID - 1) {return itemG.Name}})*/genre_name} 
            picture={item.Picture} 
            director={/*item.DirectorID = directir_list.map((itemD, DirectorID) => {if(DirectorID === item.DirectorID - 1) {return itemD.Name}})*/director_name} 
            country={/*item.CountryID = country_list.map((itemC, CountryID) => {if(CountryID === item.CountryID - 1) {return itemC.Name}})*/country_name}/>
            
          }
         })}
      </div>
      <hr />
    </div>
  )
}

export default MovieDisplay
