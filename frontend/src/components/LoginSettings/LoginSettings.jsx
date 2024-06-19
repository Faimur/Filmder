import React from 'react'
import './LoginSettings.css'
import Account from '../../pages/Account/Account'
import AccountHeader from '../AccountComponents/AccountHeader/AccountHeader'
import AccountNavbar from '../AccountComponents/AccountNavbar/AccountNavbar'


const LoginSettings = () => {
  return (
    <div className='login-settings'>
      <h3>Change password</h3>
      <div className='change-login-information-container'>
        <form className="change-login-information-container-input" id='change-login-information-container-input'>
          <input type="password" id='old-password' placeholder='Your current password' required/>
          <input type="password" id='new-password1' placeholder='Your new password' required/>
          <input type="password" id='new-password2' placeholder='Confirm new password' required/>
          <button type="submit">Confirm</button>
        </form>
      </div>
      
    </div>
  )
}

export default LoginSettings
