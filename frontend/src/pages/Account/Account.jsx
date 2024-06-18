import React, { useState } from 'react'
import './Account.css'  
import Footer from '../../components/Footer/Footer'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import LoginSettings from '../../components/LoginSettings/LoginSettings'
import LikesPage from '../../components/LikesPage/LikesPage'
import AccountNavbar from '../../components/AccountComponents/AccountNavbar/AccountNavbar'
import AccountHeader from '../../components/AccountComponents/AccountHeader/AccountHeader'

const Account = () => {
    const navigate = useNavigate();

  return (
    <>
      <div className='account'>
        <AccountHeader/>
        <AccountNavbar/>
        <Routes>
          <Route path='/account/likes' element={<LikesPage />} />
          <Route path='/account/settings' element={<LoginSettings />} />
        </Routes>

        
        <div className="logout">
          <button onClick={() => navigate('/')}>Log Out</button>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Account
