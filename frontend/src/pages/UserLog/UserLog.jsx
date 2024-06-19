import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UserLog.css'

const UserLog = () => {

    const[singState, setSingState] = useState("Log In")

  return (
    <div>
      <div className='login'>
        <div className="login-container">
            <div className="login-container-left">
            <h1>Join the largest film community</h1>
            <h5>Don't know what to watch with your friends? Our service will help you choose the best movie for an ideal pastime</h5>
            </div>
            <div className="login-container-right">
            <h3>{singState}</h3>
            <form className="login-container-right-input">
                <input type="text" placeholder='Your login' required/>
                <input type="password" placeholder='Your password' required/>
                
                {singState==="Join Filmdr"?<input type="password" placeholder='Confirm password' required/>:<></>}

                <button>Next</button>
            </form>
            <div className="form-switch">
                {singState==="Log In"?
                <p>First time here? <button onClick={() => {setSingState("Join Filmdr")}}>Join Filmdr</button></p>:
                <p>Already a member?<button onClick={() => {setSingState("Log In")}}>Log In</button></p>}
                <h6>By logging in to Filmdr, I confirm that I have read and agree to the Filmdr Terms of Service, Privacy Policy.</h6>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UserLog
