import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("Filmdr");

  return (
    <div className='navbar'>
        <ul className="navbar-menu">
            <li onClick={() => setMenu("Filmdr")} className={menu==="Filmdr"?"active":""}>Filmdr </li>
            <Link to='/home'> <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home </li> </Link>
            <Link to='/search'> <li onClick={() => setMenu("Search")} className={menu==="Search"?"active":""}>Search</li></Link>
            <Link to='account'> <li onClick={()=>setMenu("Account")} className={menu==="Account"?"active":""}>Account</li></Link>
        </ul>
    </div>
  )
}

export default Navbar
