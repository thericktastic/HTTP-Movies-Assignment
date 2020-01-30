import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const updatedMovies = editedMovie => {
    console.log("This is editedMovie in App.js: ", editedMovie)
    console.log("This is movies in App.js: ", movies)
    let filteredMovies = movies.filter(movie => editedMovie.id !== movie.id);
    return [...movies, setMovies(filteredMovies)];
  };

  return (
    <Fragment>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} updatedMovies={updatedMovies} />;
        }}
      />
    </Fragment>
  );
};

export default App;
