import React from 'react'
import "./LogIn.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const LogIn = () => {

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
    

    // Проверяем, заполнены ли все поля и совпадают ли пароли
    if (username === "" || password === "") {
      setError(true);
      return; // Прерываем функцию, если есть ошибка
    }

    // Если все проверки пройдены, выполняем переадресацию
    console.log("yes");
    setError(false);
    setPasswordMatch(true);
    navigate('/home'); // Перенаправление на страницу 'home'
  };

  return (
    <div className='login'>
      <div className="login-container">
        <div className="login-container-left">
          <h1>Join the largest film community</h1>
          <h5>Don't know what to watch with your friends? Our service will help you choose the best movie for an ideal pastime</h5>
        </div>
        <div className="login-container-right">
          <h3>Log In</h3>
          <form className="login-container-right-input" onSubmit={handleSubmit}>
            <input type="login" placeholder='Your login' className='input' name='username' onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="password"  placeholder='Your password' className='input' name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type="submit">Next</button>


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
