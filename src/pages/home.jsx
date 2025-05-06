import Moviecard from "../components/moviecard"

function Home() {

    const movies = [
        { id: 1, title: "john wick", release_date: "2021" },
        { id: 2, title: "terminator", release_date: "2024" },
        { id: 3, title: "Avengers", release_date: "2023" },

    ]
    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) =>( <Moviecard key={movie.id} movie={movie} />))}

            </div>
        </div>
    )
}
export default Home