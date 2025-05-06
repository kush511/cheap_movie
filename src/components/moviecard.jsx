import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import { useWatchList } from '../contexts/WatchList'

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
    const { watchList, addToWatchList, removeFromWatchList } = useWatchList();
    const isInWatchList = watchList.some((item) => item.id === movie.id);

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
            <button
                onClick={() => isInWatchList ? removeFromWatchList(movie.id) : addToWatchList(movie)}
                className={`watch-later-btn ${isInWatchList ? 'active' : ''}`}
            >
                {isInWatchList ? 'Remove from Watch Later' : 'Watch Later'}
            </button>
        </div>
    </div>
}

export default MovieCard