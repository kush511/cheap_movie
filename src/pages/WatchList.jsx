import React from 'react';
import { useWatchList } from '../contexts/WatchList';
import MovieCard from '../components/MovieCard';
import '../css/WatchList.css';

const WatchList = () => {
  const { watchList } = useWatchList();

  return (
    <div className="watchlist-container">
      <h2>My Watch List</h2>
      {watchList.length === 0 ? (
        <p>Your watch list is empty</p>
      ) : (
        <div className="movies-grid">
          {watchList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;