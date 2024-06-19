import React, { useState } from 'react'
import "./Authorisation.css"
import { Link, Route, useNavigate } from 'react-router-dom'

const Authorisation = () => {/*


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
    
    navigate('/home');
  }

  function handleLogin() {
    navigate('/home');
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
          <form className="authorisation-container-right-input" onSubmit={handleSubmit}>
            <input type="login" placeholder='Your login' className='input' name='login' onChange={handleChange} value={formData.login}/>

            <input type="password"  placeholder='Your password' className='input' name="password" onChange={handleChange} value={formData.password}/>
            <input type="password"  placeholder='Comfirm password' className='input' name="confirmpassword" onChange={handleChange} value={formData.confirmpassword}/>
            {/*<input type="hidden" name="url_redirect" value="http://localhost:5173/home" />}
            /*<div className="authorisation-container-right-input-wrong-password"></div>
            <button type="submit">Next</button>
          </form>
          <h4>Already a member?</h4>
          <button onClick={() => navigate('/')}>Log In</button>
          <h6>By logging in to Filmdr, I confirm that I have read and agree to the Filmdr Terms of Service, Privacy Policy.</h6>
        </div>
      </div>
    </div>
  )
*/
const navigate = useNavigate();
  /*const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmPassword: ""
  });*/

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

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
    if (username === "" || password === "" || confirmpassword === "") {
      setError(true);
      return; // Прерываем функцию, если есть ошибка
    } else if (password !== confirmpassword) {
      setPasswordMatch(false);
      setError(true);
      return; // Прерываем функцию, если пароли не совпадают
    }

    // Если все проверки пройдены, выполняем переадресацию
    console.log("yes");
    setError(false);
    setPasswordMatch(true);
    navigate('/home'); // Перенаправление на страницу 'home'
  };

  return (
    <div className='authorisation'>
      <div className="authorisation-container">
        <div className="authorisation-container-left">
          <h1>Join the largest film community</h1>
          <h5>Don't know what to watch with your friends? Our service will help you choose the best movie for an ideal pastime</h5>
        </div>
        <div className="authorisation-container-right">
          <h3>Join Filmdr</h3>
          <form className="authorisation-container-right-input" onSubmit={handleSubmit}>
            <input type="login" placeholder='Your login' className='input' name='username' onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="password"  placeholder='Your password' className='input' name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input type="password"  placeholder='Comfirm password' className='input' name="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword}/>
            <button type="submit">Next</button>
          </form>
          <h4>Already a member?</h4>
          <button onClick={() => navigate('/')}>Log In</button>
          <h6>By logging in to Filmdr, I confirm that I have read and agree to the Filmdr Terms of Service, Privacy Policy.</h6>
        </div>
      </div>
    </div>
  );
}


export default Authorisation
