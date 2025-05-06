import React, { createContext, useState, useContext } from 'react';

const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
    setWatchList((prev) => [...prev, movie]);
  };

  const removeFromWatchList = (movieId) => {
    setWatchList((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <WatchListContext.Provider value={{ watchList, addToWatchList, removeFromWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => useContext(WatchListContext);