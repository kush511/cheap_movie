import Moviecard from "../components/moviecard"
import { useState } from 'react'

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const movies = [
        { id: 1, title: "john wick", release_date: "2021" },
        { id: 2, title: "terminator", release_date: "2024" },
        { id: 3, title: "Avengers", release_date: "2023" },

    ]

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(`Searching for ${searchQuery}`)
        setSearchQuery("")
    }

    return (


        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                placeholder="Search for movies ..."
                className="search-input" 
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) =>(  <Moviecard key={movie.id} movie={movie} />)
            )}

            </div>
        </div>
    )
}
export default Home