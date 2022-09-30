import './App.css';
import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from "./BaseComponents/ProtectedRoute";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import moviesArray from '../utils/MoviesArray';
import savedMoviesArray from '../utils/SavedMoviesArray';

import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import PageNotFound from './PageNotFound/PageNotFound';
import ModalWindow from './ModalWindow/ModalWindow';

import { signup, signin, checkToken } from '../utils/Api/AuthApi';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    name: "Name",
    email: 'example@domain.net',
    _id: 1,
  });
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);

  const [authorizationData, setAuthorizationData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setAuthorizationData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };


  const [movies, setMovies] = useState(moviesArray);
  const [savedMovies, setsavedMovies] = useState(savedMoviesArray);

  const handleSignUp = (name, email, password) => {
    /* const { name, email, password } = authorizationData; */
    console.log(`Кнорка зарегистрироваться нажата, здесь: ${name}, ${email}, ${password}`);
    setIsModalWindowOpen(true);
    signup(name, email, password)
      .then((response) => {
        console.log(response);
        if (response.email) {
          navigate("/signin");
        }
      })
      .then(() => {
        setAuthorizationData({ name: '', email: '', password: '' });
      })
      .catch((err) => console.error(err))
      .finally(() => setIsModalWindowOpen(false));
  };

  const handleSignIn = () => {
    const { email, password } = authorizationData;
    console.log(`Кнорка войти нажата, здесь: ${email}, ${password}`);
    signin(email, password)
      .then((response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem("jwt", response.token);
          /* setUserEmail(email);
          setLoggedIn(true); */
          navigate("/");
        }
      })
      .then(() => {
        setAuthorizationData({ password: "", email: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signup' element={<Signup
            onSignUp={handleSignUp}
            handleChangeInput={handleChangeInput}
            nameInput={authorizationData.name}
            emailInput={authorizationData.email}
            passwordInput={authorizationData.password}
          />} />
          <Route path='/signin' element={<Signin
            onSignIn={handleSignIn}
            handleChangeInput={handleChangeInput}
            emailInput={authorizationData.email}
            passwordInput={authorizationData.password}
          />} />
          <Route path='/' element={<Main />} />
          <Route path="/" element={<ProtectedRoute loggedIn={currentUser.loggedIn} />}>
            <Route path='/movies' element={<Movies
              movies={movies}
            />} />
            <Route path='/saved-movies' element={<SavedMovies
              movies={savedMovies}
              owner={1}
            />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <ModalWindow isOpen={isModalWindowOpen} />
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
