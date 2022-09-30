export const BASE_URL = "https://api.foxylabstory.nomoredomains.sbs";

const isOk = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Произошла ошибка: ${response.status}`);
};

export const signup = (name, email, password) => {
    console.log(`Регистрация: ${JSON.stringify({name, email, password})}`);
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, password})
  }).then(isOk);
};

export const signin = (email, password) => {
  console.log(`Авторизация: ${JSON.stringify({email, password})}`);
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  }).then(isOk);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then(isOk);
};
