import './App.css';
import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from "./BaseComponents/ProtectedRoute";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import moviesArray from '../utils/MoviesArray';

import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import Footer from './BaseComponents/Footer/Footer';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    loggedIn: true,
    name: "Name",
    _id: " ",
  });

  

  const [movies, setMovies] = useState(moviesArray);
console.log(moviesArray);
console.log(movies);
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Main />} />
          <Route path="/" element={<ProtectedRoute loggedIn={currentUser.loggedIn} />}>
            <Route path='/movies' element={<Movies
              movies={movies} />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
