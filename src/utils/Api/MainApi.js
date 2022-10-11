/* export const BASE_URL = "https://api.foxylabstory.nomoredomains.sbs";
 */
import { MAIN_API_URL as BASE_URL, MOVIE_API_PATH_FOR_THUMBNAIL } from '../constants/constants';

const isOk = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(response);
};

export const signup = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
  }).then(isOk);
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  }).then(isOk);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token/* localStorage.getItem('jwt') */}`,
    },
  }).then(isOk);
};

export const updateUser = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({ name, email })
  }).then(isOk);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(isOk);
};

export const createMovie = (wholeMovie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      country: wholeMovie.country,
      director: wholeMovie.director,
      duration: wholeMovie.duration,
      year: wholeMovie.year,
      description: wholeMovie.description,
      image: MOVIE_API_PATH_FOR_THUMBNAIL + wholeMovie.image.url, // MOVIE_API_PATH_FOR_THUMBNAIL + wholeMovie.image.url,
      trailerLink: wholeMovie.trailerLink,
      thumbnail: MOVIE_API_PATH_FOR_THUMBNAIL + wholeMovie.image.formats.thumbnail.url, // MOVIE_API_PATH_FOR_THUMBNAIL + wholeMovie.image.formats.thumbnail.url,
      movieId: wholeMovie.id,
      nameRU: wholeMovie.nameRU,
      nameEN: wholeMovie.nameEN,
    })
  }).then(isOk);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(isOk);
};