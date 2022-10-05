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

import {
  BREAKPOINT_1280,
  BREAKPOINT_480,
  VISIBLE_MOVIES_5,
  VISIBLE_MOVIES_8,
  VISIBLE_MOVIES_12,
  MOVIES_TO_LOAD_2,
  MOVIES_TO_LOAD_3,
  SHORT_FILM_DURATION,
} from '../utils/constants/constants';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [shortsCheckbox, setShortsCheckbox] = useState(false);
  const [shortsCheckboxSaved, setShortsCheckboxSaved] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [moviesToLoad, setMoviesToLoad] = useState(0);
  const [displayMeMovies, setDisplayMeMovies] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(false);



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

  const [movieArrayAfterSearch, setMovieArrayAfterSearch] = useState([]);
  const [shortMovieArrayAfterSearch, setShortMovieArrayAfterSearch] = useState([]);
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
    console.log(localStorage);
    console.log(movieArrayAfterSearch);
    console.log(shortMovieArrayAfterSearch);
    setMovieArrayAfterSearch(JSON.parse(localStorage.getItem('movieArrayAfterSearch')));
    setShortMovieArrayAfterSearch(JSON.parse(localStorage.getItem('shortMovieArrayAfterSearch')));
    tokencheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (location.pathname === '/movies') {
      if (windowWidth <= BREAKPOINT_480) {
        setDisplayMeMovies(VISIBLE_MOVIES_5);
        setMoviesToLoad(MOVIES_TO_LOAD_2);
      } else if (windowWidth < BREAKPOINT_1280 && windowWidth > BREAKPOINT_480) {
        setDisplayMeMovies(VISIBLE_MOVIES_8);
        setMoviesToLoad(MOVIES_TO_LOAD_2);
      } else if (windowWidth >= BREAKPOINT_1280) {
        setDisplayMeMovies(VISIBLE_MOVIES_12);
        setMoviesToLoad(MOVIES_TO_LOAD_3);
      };
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth, location]);

  const clearErrorText = () => { setTimeout(() => setErrorText(''), 10000) };

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
        clearErrorText();
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
        clearErrorText();
      });
  };

  const handleUpdateUserInfo = (name, email) => {
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
        clearErrorText();
      });

  };

  const handleSignOut = () => {
    console.log(localStorage);
    localStorage.clear();
    console.log(localStorage);
    navigate('/');
    setCurrentUser({});
    setShortsCheckbox(false);
    setShortsCheckboxSaved(false);
    setMovieArrayAfterSearch([]);
    setShortMovieArrayAfterSearch([]);
  };

  const tokencheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken()
        .then((response) => {
          if (response) {
            setCurrentUser({
              loggedIn: true,
              name: response.name,
              email: response.email,
              _id: response._id,
            });
            navigate('/movies');
          }
        })
        .catch((err) => {
          handleSignOut();
          console.error(err);
        });
    }
  }

  const handleChangeShortsCheckbox = (evt) => {
    if (location.pathname === '/movies') {
      setShortsCheckbox(!shortsCheckbox);
      localStorage.setItem('shortsCheckbox', !shortsCheckbox);
    } else if (location.pathname === '/saved-movies') {
      setShortsCheckboxSaved(!shortsCheckboxSaved);
      localStorage.setItem('shortsCheckboxSaved', !shortsCheckboxSaved);
    }
  };

  const handleShowMoreMovies = () => {
    setDisplayMeMovies(displayMeMovies + moviesToLoad);
  };

  const searchMovie = (keyWord) => {
    setErrorText('');
    localStorage.setItem('searchKey', keyWord);
    const movieArrayFromLocalStorage = JSON.parse(localStorage.getItem('allMovies'));
    const movieArrayAfterSearch = movieArrayFromLocalStorage.filter(film => film.nameRU.toLowerCase().includes(keyWord.toLowerCase()));
    localStorage.setItem('movieArrayAfterSearch', JSON.stringify(movieArrayAfterSearch));
    setMovieArrayAfterSearch(movieArrayAfterSearch);
    const shortMovieArrayAfterSearch = movieArrayAfterSearch.filter(film => film.duration <= SHORT_FILM_DURATION);
    localStorage.setItem('shortMovieArrayAfterSearch', JSON.stringify(shortMovieArrayAfterSearch));
    setShortMovieArrayAfterSearch(shortMovieArrayAfterSearch);
    // Сохранение чекбокса происходит сразу в handleChangeShortsCheckbox, эта строка не нужна localStorage.setItem('checkbox', shortsCheckbox);
    if (location.pathname === '/movies' && movieArrayAfterSearch.length === 0) {
      setErrorText('Ничего не найдено');
    } else if (location.pathname === '/movies' && shortsCheckbox && shortMovieArrayAfterSearch.length === 0) {
      setErrorText('Ничего не найдено');
    };
    if (movieArrayAfterSearch.length > displayMeMovies && location.pathname === '/movies') {
      setIsMoreButtonVisible(true);
    } else if (shortMovieArrayAfterSearch.length > displayMeMovies && location.pathname === '/saved-movies') {
      setIsMoreButtonVisible(true);
    };
    
  };




  const handleSearchMovies = (keyWord) => {
    setPreloader(true);
    if (!JSON.parse(localStorage.getItem('allMovies'))) {
      getAllMovies()
        .then((movies) => {
          const filteredMovies = movies.filter(film => film.trailerLink.startsWith('http'));
          localStorage.setItem('allMovies', JSON.stringify(filteredMovies));
        })
        .then(() => {
          searchMovie(keyWord);
        })
        .catch((err) => {
          setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          console.log(err);
        })
        .finally(() => {
          setPreloader(false);
          clearErrorText();
        })
    } else if (JSON.parse(localStorage.getItem('allMovies'))) {
      searchMovie(keyWord);
      setPreloader(false);
      clearErrorText();
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
              movies={movieArrayAfterSearch}
              shortMovies={shortMovieArrayAfterSearch}
              onChangeShortsCheckbox={handleChangeShortsCheckbox}
              shortsCheckbox={shortsCheckbox}
              searchKey={localStorage.getItem('searchKey')}
              onSubmit={handleSearchMovies}
              preloader={preloader}
              errorText={errorText}
              handleShowMoreMovies={handleShowMoreMovies}
              displayMeMovies={displayMeMovies}
              isMoreButtonVisible={isMoreButtonVisible}
            />} />
            <Route path='/saved-movies' element={<SavedMovies
              movies={savedMovies}
              owner={1}
              onChangeShortsCheckbox={handleChangeShortsCheckbox}
              shortsCheckboxSaved={shortsCheckboxSaved}
              searchKey={localStorage.getItem('searchKey')}
              onSubmit={handleSearchMovies}
              preloader={preloader}
              errorText={errorText}
              handleShowMoreMovies={handleShowMoreMovies}
              displayMeMovies={displayMeMovies}
            />} />
            <Route path='/profile' element={<Profile
              onUpdate={handleUpdateUserInfo}
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
