import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreFilms from '../../components/ExploreFilms/ExploreFilms'
import Footer from '../../components/Footer/Footer'
import MovieDisplay from '../../components/MovieDisplay/MovieDisplay'

const Home = () => {

  const[category, setCategory] = useState("All");

  return (
    <div className='home'>
        <Header/>
        <ExploreFilms/>
        <Footer />
    </div>
  ) 
}

export default Home
