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

import { signup, signin, checkToken, updateUser } from '../utils/Api/MainApi';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [errorText, setErrorText] = useState('');

  /*   const [authorizationData, setAuthorizationData] = useState({
      name: '',
      email: '',
      password: '',
    }); */

  /*   const handleChangeInput = (event) => {
      const { name, value } = event.target;
      setAuthorizationData((oldData) => ({
        ...oldData,
        [name]: value,
      }));
    }; */


  const [movies, setMovies] = useState(moviesArray);
  const [savedMovies, setsavedMovies] = useState(savedMoviesArray);

  const handleSignUp = (name, email, password) => {
    setIsModalWindowOpen(true);
    signup(name, email, password)
      .then((response) => {
        console.log(response);
        if (response.email) {
          handleSignIn(email, password);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorText(err.status === 409 ? 'Пользователь с таким email уже зарегистрирован' : 'При регистрации пользователя произошла ошибка.');
      })
      .finally(() => {
        setIsModalWindowOpen(false);
        setTimeout(() => setErrorText(''), 5000);
      });
  };

  const handleSignIn = (email, password) => {
    setIsModalWindowOpen(true);
    signin(email, password)
      .then((response) => {
        if (response.token) {
          localStorage.setItem("jwt", response.token);
          checkToken().then((response) => {
            setCurrentUser({
              loggedIn: true,
              name: response.name,
              email: response.email,
              _id: response._id,
            });
            navigate("/movies");
          })
            .catch((err) => {
              console.log(err);
            })
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorText(err.status === 401 ? 'Вы ввели неправильный логин или пароль.' : 'При авторизации произошла ошибка.');
      })
      .finally(() => {
        setIsModalWindowOpen(false);
        setTimeout(() => setErrorText(''), 10000);
      });
  };

  const handleUpdate = (name, email) => {
    setIsModalWindowOpen(true);
    updateUser(name, email)
      .then((response) => {
        setCurrentUser({
          loggedIn: true,
          name: response.name,
          email: response.email,
          _id: response._id,
        });
        setErrorText('Изменение данных прошло успешно!');
        console.log(response);
      })
      .catch((err) => {
        setErrorText(err.status === 409 ? 'Пользователь с таким email уже существует.' : 'При обновлении профиля произошла ошибка.');
        console.error(err);
      })
      .finally(() => {
        setIsModalWindowOpen(false);
        setTimeout(() => setErrorText(''), 10000)
      });

  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
    setCurrentUser({});
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signup' element={<Signup
            onSignUp={handleSignUp}
            errorText={errorText}
          />} />
          <Route path='/signin' element={<Signin
            onSignIn={handleSignIn}
            errorText={errorText}
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
            <Route path='/profile' element={<Profile
              onUpdate={handleUpdate}
              onSignOut={handleSignOut}
              errorText={errorText}
            />} />
          </Route>
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <ModalWindow isOpen={isModalWindowOpen} />
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
