import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import Home from './pages/Home';
import Registration from './pages/Registration';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/reg" element={ <Registration /> } />
      </Routes>
    </div>
  )
}

export default App