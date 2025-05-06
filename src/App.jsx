import { useState } from 'react'
import Moviecard from './components/MovieCard'
import Home from './pages/home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/App.css"
import Favorites from './pages/favorites'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import { MovieProvider } from './contexts/MovieContext'
function App() {
  
  return (
    <MovieProvider>
    <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </main>
    </MovieProvider>
  )
}



export default App
