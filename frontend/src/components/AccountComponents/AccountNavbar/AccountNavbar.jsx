import React, { useState } from 'react'
import './AccountNavbar.css'
import { Link } from 'react-router-dom';

const AccountNavbar = () => {
  const [accmenu, setAccMenu] = useState("All")

  return (
    <div className='account-navbar'>
      <ul className="account-navbar-menu">
        <Link to='/account/likes'><button onClick={() => setAccMenu("Likes")} className={accmenu==="Likes"?"active":""}>Likes</button></Link>
        <button onClick={() => setAccMenu("Friends list")} className={accmenu==="Friends list"?"active":""}>Friends list</button>
        <Link to='/account/settings'> <button onClick={() => setAccMenu("Settings")}className={accmenu==="Settings"?"active":""}>Settings</button> </Link> 
      </ul>
    </div>
  )
}

export default AccountNavbar
