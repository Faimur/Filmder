import React, { useState } from 'react'
import "./Footer.css"
import SupportUs from '../SupportUs/SupportUs';

const Footer = (setShowLogin) => {

  const[isOpen, setIsOpen] = useState(false);

  function toggle(){
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>About Us</h2>
            <ul>
                <li>Vlasova Varvara</li>
                <li>Grigorenko Vladimir?</li>
                <li>Kochergina Sofia</li>
            </ul>
            <a href="https://www.termsfeed.com/live/30cb932f-b4b4-4252-ad11-518120faf906">Privacy Policy</a>
        </div>
        <div className="footer-content-center">Пожалуйста допустите до экзамена
        </div>
        <div className="footer-content-right">
            <button onClick={toggle}>Support Us</button>
            {isOpen && <SupportUs/>}
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Filmder.com - All Rigth Reserved.</p>
    </div>
  )
}

export default Footer
