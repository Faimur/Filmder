import React, { useState } from 'react'
import './LoginSettings.css'
import Account from '../../pages/Account/Account'
import AccountHeader from '../AccountComponents/AccountHeader/AccountHeader'
import AccountNavbar from '../AccountComponents/AccountNavbar/AccountNavbar'
import { useNavigate } from 'react-router-dom'


const LoginSettings = () => {

  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (username === "" || password === "") {
      setError(true);
      return; 
    }


    console.log("yes");
    setError(false);
    setPasswordMatch(true);
    navigate('/account');
  };

  return (
    <div className='login-settings'>
      <h3>Change password</h3>
      <div className='change-login-information-container'>
          <form className="login-container-right-input" onSubmit={handleSubmit}>
            <div></div>
            <input type="login" placeholder='Your login' className='input' name='username' onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="password"  placeholder='Your password' className='input' name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type="submit">Next</button>
          </form>
      <button onClick={() => navigate('/account') }>X</button>
      </div>
      
    </div>
  )
}

export default LoginSettings
