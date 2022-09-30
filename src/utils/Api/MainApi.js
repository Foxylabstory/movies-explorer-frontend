export const BASE_URL = "https://api.foxylabstory.nomoredomains.sbs";

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
    body: JSON.stringify({name, email, password})
  }).then(isOk);
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  }).then(isOk);
};

export const checkToken = (/* token */) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${/* token */localStorage.getItem('jwt')}`,
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
    body: JSON.stringify({name, email})
  }).then(isOk);
};