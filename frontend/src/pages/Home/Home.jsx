import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreFilms from '../../components/ExploreFilms/ExploreFilms'
import Footer from '../../components/Footer/Footer'
import MovieDisplay from '../../components/MovieDisplay/MovieDisplay'
import FilmContextProvider from '../../context/FilmContext'
import SupportUs from '../../components/SupportUs/SupportUs'

const Home = () => {
  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
      {showLogin?<SupportUs/>:<></>}
      <div className='home'>
          <Header/>
          <ExploreFilms/>
          <Footer setShowLogin={setShowLogin}/>
      </div>
    </>
  ) 
}

export default Home
