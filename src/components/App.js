import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from "./BaseComponents/ProtectedRoute";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* import moviesArray from '../utils/MoviesArray';
import savedMoviesArray from '../utils/SavedMoviesArray'; */

import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import PageNotFound from './PageNotFound/PageNotFound';
import ModalWindow from './ModalWindow/ModalWindow';

import { signup, signin, checkToken, updateUser } from '../utils/Api/MainApi';
import { getAllMovies } from '../utils/Api/MoviesApi';
import {
  /* CREATED,
  BAD_REQUEST, */
  UNAUTHORIZED,
  /* FORBIDDEN,
  NOT_FOUND, */
  CONFLICT,/* 
  INTERNAL_SERVER_ERROR, */
} from '../utils/constants/errorStatuses';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [shortsCheckbox, setShortsCheckbox] = useState(false);
  const [shortsCheckboxSaved, setShortsCheckboxSaved] = useState(false);
  const [isFound, setIsFound] = useState(false); //если не нашел ни одного фильма

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


  const [movies, setMovies] = useState([]);
  const [savedMovies, setsavedMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('shortsCheckboxSaved') === 'true') {
      setShortsCheckboxSaved(true);
    } else {
      setShortsCheckbox(false);
    };
    if (localStorage.getItem('shortsCheckbox') === 'true') {
      setShortsCheckbox(true);
    } else {
      setShortsCheckboxSaved(false);
    };

  }, []);

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
        setErrorText(err.status === CONFLICT ? 'Пользователь с таким email уже зарегистрирован' : 'При регистрации пользователя произошла ошибка.');
      })
      .finally(() => {
        setIsModalWindowOpen(false);
        setTimeout(() => setErrorText(''), 10000);
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
        setErrorText(err.status === UNAUTHORIZED ? 'Вы ввели неправильный логин или пароль.' : 'При авторизации произошла ошибка.');
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
        setErrorText(err.status === CONFLICT ? 'Пользователь с таким email уже существует.' : 'При обновлении профиля произошла ошибка.');
        console.error(err);
      })
      .finally(() => {
        setIsModalWindowOpen(false);
        setTimeout(() => setErrorText(''), 10000);
      });

  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
    setCurrentUser({});
    setShortsCheckbox(false);
    setShortsCheckboxSaved(false);
  };

  const handleChangeShortsCheckbox = (evt) => {
    if (location.pathname === '/movies') {
      setShortsCheckbox(!shortsCheckbox);
      localStorage.setItem('shortsCheckbox', !shortsCheckbox);
    } else if (location.pathname === '/saved-movies') {
      setShortsCheckboxSaved(!shortsCheckboxSaved);
      localStorage.setItem('shortsCheckboxSaved', !shortsCheckboxSaved);
    }
  };

  const searchMovie = (movies, name) => {
    return movies.filter((item) =>
      item.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  

  const handleSearchMovies = (name) => {
    setIsModalWindowOpen(true);
    if (!JSON.parse(localStorage.getItem('allMovies'))) {
      getAllMovies()
        .then((movies) => {
          const filteredMovies = movies.filter(film => film.trailerLink.startsWith('http'));
          localStorage.setItem('allMovies', JSON.stringify(filteredMovies)); // Нужно мне его приводить к JSON.stringify?
        })
        .then(() => {
          const selectedMovies = searchMovie(JSON.parse(localStorage.getItem('allMovies')), name);
          setMovies(selectedMovies);
          setIsFound(!movies.length);
          localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));
          localStorage.setItem('searchKey', name);
          localStorage.setItem('checkbox', shortsCheckbox);
          console.log(selectedMovies);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsModalWindowOpen(false);
          setTimeout(() => setErrorText(''), 10000);
        })
    } else if (JSON.parse(localStorage.getItem('allMovies'))) {
      const selectedMovies = searchMovie(JSON.parse(localStorage.getItem('allMovies')), name);
          setMovies(selectedMovies);
          setIsFound(!selectedMovies.length);
          localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));
          localStorage.setItem('searchKey', name);
          localStorage.setItem('checkbox', shortsCheckbox);
          console.log(selectedMovies);
          setIsModalWindowOpen(false);
    };
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
              onChangeShortsCheckbox={handleChangeShortsCheckbox}
              shortsCheckbox={shortsCheckbox}
              searchKey={localStorage.getItem('searchKey')}
              onSubmit={handleSearchMovies}
            />} />
            <Route path='/saved-movies' element={<SavedMovies
              movies={savedMovies}
              owner={1}
              onChangeShortsCheckbox={handleChangeShortsCheckbox}
              shortsCheckboxSaved={shortsCheckboxSaved}
              searchKey={localStorage.getItem('searchKey')}
              onSubmit={handleSearchMovies}
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
