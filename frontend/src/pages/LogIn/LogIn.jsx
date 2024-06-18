import React from 'react'
import "./LogIn.css"
import { useNavigate } from 'react-router-dom'

const LogIn = () => {

  const navigate = useNavigate();

  return (
    <div className='login'>
      <div className="login-container">
        <div className="login-container-left">
          <h1>Join the largest film community</h1>
          <h5>Don't know what to watch with your friends? Our service will help you choose the best movie for an ideal pastime</h5>
        </div>
        <div className="login-container-right">
          <h3>Log In</h3>
          <form className="login-container-right-input">
            <input type="text" id="Ylogin" required placeholder='Your login'/>
            <input type="password" id='Ypassword' required placeholder='Your password'/>
            <button onClick={() => {/*if (document.required === false && document.getElementById(Ypassword).required === true)*/ navigate('/home')}}>Next</button>
          </form>
          <h4>First time here?</h4>
          <button onClick={() => navigate('/authorisation')}>Join Filmdr</button>
          <h6>By logging in to Filmdr, I confirm that I have read and agree to the Filmdr Terms of Service, Privacy Policy.</h6>
        </div>
      </div>
    </div>
  )
}

export default LogIn
