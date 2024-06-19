import React from 'react'
import './MainPage.css'
import Navbar from '../Navbar/Navbar'
import Home from '../../pages/Home/Home'

const MainPage = () => {
  return (
        <div className='mainpage'>
            <Navbar/>
            <Home/>
        </div>
  )
}

export default MainPage
