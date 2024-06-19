import React, { useState } from 'react'
import "./Authorisation.css"
import { Link, useNavigate } from 'react-router-dom'

const Authorisation = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmpassword:""
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
      password=== "" ||
      confirmpassword===""
    )
    { setError(true);}
    else{
      setSubmitted(true);
      setError(false);
    }
    if (formData.password === formData.confirmPassword) {setPasswordMatch(true)}
    else if (formData.confirmPassword === '') {setError(true) } 
    else {
         setPasswordMatch(false)
         setSubmitted(false)
    }
  }

  

  return (
    <div className='authorisation'>
      <div className="authorisation-container">
        <div className="authorisation-container-left">
          <h1>Join the largest film community</h1>
          <h5>Don't know what to watch with your friends? Our service will help you choose the best movie for an ideal pastime</h5>
        </div>
        <div className="authorisation-container-right">
          <h3>Join Filmdr</h3>
          <form className="authorisation-container-right-input" id='authorisation-container-right-input' onSubmit={handleSubmit}>
            <input type="login" placeholder='Your login' className='input' name='login' onChange={handleChange} value={formData.login}/>

            <input type="password"  placeholder='Your password' className='input' name="password" onChange={handleChange} value={formData.password}/>
            <input type="password"  placeholder='Comfirm password' className='input' name="confirmpassword" onChange={handleChange} value={formData.confirmpassword}/>
            
            <div className="authorisation-container-right-input-wrong-password"></div>
            <button onClick={submitted?<a href='http://localhost:5173/home'/>:<></>}>Next</button>
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
