import { useState } from 'react'
import Moviecard from './components/moviecard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const movienumber=2
  return (
    <>
   {movienumber === 1 ?<Moviecard movie={{title:"new movie",release_date:"2024"}} />:<Moviecard movie={{title:"new2 movie",release_date:"2025"}} />}
   </>
   
  )
}



export default App
