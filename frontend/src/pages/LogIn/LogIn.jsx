import React from 'react'
import "./LogIn.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const LogIn = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  })

  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]:type==="checkbox"?checked:value
    }))
  }

  const handleSubmit = (event) => {
    event.prevent.Default()
    if(
      login=== "" ||
      password=== ""
    )
    { setError(true);}
    else{
      setSubmitted(true);
      setError(false);
      navigate('/home')
    }
  }

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
            <input type="login" placeholder='Your login' className='input' name='login' onChange={handleChange} value={formData.login}/>
            <input type="password"  placeholder='Your password' className='input' name="password" onChange={handleChange} value={formData.password}/>
            <button className='submit'>Next</button>


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
