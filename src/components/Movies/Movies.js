import React from "react";
import { Link } from 'react-router-dom';
import Header from "../BaseComponents/Header/Header";
import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
  return (
    <div className="movies">
      <Header>
        <Link className="header__link header__link_films" to={"/movies"}>Фильмы</Link>
        <Link className="header__link header__link_saved-films" to={"/saved-movies"}>Сохранённые фильмы</Link>
        <Link className="header__button header__button_logged" to={"/profile"}>Аккаунт</Link>
      </Header>
      <SearchForm />
    </div>
  )
}

export default Movies;