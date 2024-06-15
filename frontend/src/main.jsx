import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import FilmContextProvider from './context/FilmContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App/>
    {/*<FilmContextProvider>
      <App/>
    </FilmContextProvider>*/}
  </BrowserRouter>
)
