import { MOVIE_API_URL as BASE_URL } from '../constants/constants';

const isOk = (response) => {
    return response.ok
        ? response.json()
        : Promise.reject(response);
};

export const getAllMovies = () => {
    return fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(isOk);
  };