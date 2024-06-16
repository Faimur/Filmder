import React, { useState } from 'react'
import "./ExploreFilms.css"
import Filters from './Filters/Filters';
import MovieDisplay from '../MovieDisplay/MovieDisplay';


const ExploreFilms = () => {
  
  const[category, setCategory] = useState("All");

  const[isOpen, setIsOpen] = useState(false);

  function toggle(){
    setIsOpen((isOpen) => !isOpen);
  }
  
  return (
    <div className='explore-films' id='explore-films'>
      <h1>Choose film</h1>
      <button onClick={toggle} className='filters-btn'>Filters</button>
      {isOpen && <Filters  category={category} setCategory={setCategory}/>}
      <hr />
      <MovieDisplay category={category} setCategory={setCategory}/>
      {/*<div className='explore-films-list'> </div>*/}
    </div>
  )
}

export default ExploreFilms
