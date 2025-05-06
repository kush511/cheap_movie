import { useState } from 'react'
import Moviecard from './components/moviecard'
import Home from './pages/home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favorites from './pages/favorites'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
function App() {
  
  return (
    <div>
    <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </main>
    </div>
  )
}



export default App
