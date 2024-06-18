import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import LogIn from './pages/LogIn/LogIn'
import Authorisation from './pages/Authorisation/Authorisation'
import Search from './pages/Search/Search'
import Account from './pages/Account/Account'
import LoginSettings from './components/LoginSettings/LoginSettings'
import LikesPage from './components/LikesPage/LikesPage'
const App = () => {


  return (
    <>
      <div className='app'> 
        <Navbar /> 
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/authorisation' element={<Authorisation />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/account/*' element={<Account />} />
            <Route path='/account/likes' element={<LikesPage />} />
            <Route path='/account/settings' element={<LoginSettings />} />
            
          </Routes>
      </div>
    </>
  )
}

export default App

