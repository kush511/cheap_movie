import { Link } from "react-router-dom"
import "../css/NavBar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Cheap-Movie</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/watchlist" className="nav-link">Watch List</Link>
            </div>
        </nav>
    )
}

export default Navbar