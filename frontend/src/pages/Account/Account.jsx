import React, { useState } from 'react'
import './Account.css'  
import Footer from '../../components/Footer/Footer'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import LoginSettings from '../../components/LoginSettings/LoginSettings'
import LikesPage from '../../components/LikesPage/LikesPage'

const Account = () => {
    const navigate = useNavigate();
    const [menu,setMenu] = useState("Likes");

  return (
    <div className='account'>

      <Routes>
        <Route path='/account/likes' element={<LikesPage/>} />
        <Route path='/account/settings' element={<LoginSettings/>} />
      </Routes>

      <div className="account-view">
        <h1>PLEASE WORK</h1>
      </div>
      <div className="account-navbar">
      <Link to='/account/likes'><button onClick={() => setMenu("Likes")} className={menu==="Likes"?"active":""}>Likes</button></Link>
      <button onClick={() => setMenu("Friends list")} className={menu==="Friends list"?"active":""}>Friends list</button>
      <Link to='/account/settings'> <button onClick={() => setMenu("Settings")}className={menu==="Settings"?"active":""}>Settings</button> </Link> 
      </div>
      <div className="logout">
        <button onClick={() => navigate('/')}>Log Out</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Account
