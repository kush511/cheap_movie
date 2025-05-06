import { MdFavorite } from "react-icons/md";

function Moviecard({movie}){

    function onFavoriteClick(){
        alert("clicked")
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>
            <MdFavorite />
            </button>
        </div>
        </div>
    <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
    </div>
    </div>
}

export default Moviecard