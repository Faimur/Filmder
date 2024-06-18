import React from 'react'
import "./Authorisation.css"
import { useNavigate } from 'react-router-dom'

const Authorisation = () => {

  const navigate = useNavigate();

  return (
    <div className='authorisation'>
      <div className="authorisation-container">
        <div className="authorisation-container-left">
          <h1>Join the largest film community</h1>
          <h5>Don't know what to watch with your friends? Our service will help you choose the best movie for an ideal pastime</h5>
        </div>
        <div className="authorisation-container-right">
          <h3>Join Filmdr</h3>
          <form className="authorisation-container-right-input" id='authorisation-container-right-input'>
            <input type="text" id="Alogin" placeholder='Your login' required />
            <input type="password" id='password1' placeholder='Your password' required/>
            <input type="password" id='password2' placeholder='Confirm password' required/>
            <div className="authorisation-container-right-input-wrong-password"></div>
            <button type="submit" onClick={() => {
              /*let data1 = document.querySelector('.authorisation-container-right-input#password1').val();
              let data2 = document.querySelector('.authorisation-container-right-input#password2').val();
              if(data1 != data2) {document.querySelector('.authorisation-container-right-input-wrong-password').innerHTML = 'пароли не совпадают'}
              */navigate('/home')
              }}>Next</button>
          </form>
          <h4>Already a member?</h4>
          <button onClick={() => navigate('/')}>Log In</button>
          <h6>By logging in to Filmdr, I confirm that I have read and agree to the Filmdr Terms of Service, Privacy Policy.</h6>
        </div>
      </div>
    </div>
  )
}

export default Authorisation
