import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Favorites from './pages/favorites'
import WatchList from './pages/WatchList'
import Navbar from './components/navbar'
import { MovieProvider } from './contexts/MovieContext'
import { WatchListProvider } from './contexts/WatchList' // Fixed import path
import "./css/App.css"

function App() {
  return (
    <MovieProvider>
      <WatchListProvider>
        <Navbar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </main>
      </WatchListProvider>
    </MovieProvider>
  )
}

export default App
