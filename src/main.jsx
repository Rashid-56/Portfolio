import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Hero from './Components/Hero.jsx'
import Projects from './Components/Projects.jsx'
import Technology from './Components/Technology.jsx'
import About from './Components/About.jsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<App/>
</BrowserRouter>

  </React.StrictMode>
)
