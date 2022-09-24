import React from "react";
import './Movies.css';
import { Link } from 'react-router-dom';
import Header from "../BaseComponents/Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";
import Footer from "../BaseComponents/Footer/Footer";

function Movies(params) {
  return (
    <div className="movies">
      <Header>
        <Link className="header__link header__link_films" to={"/movies"}>Фильмы</Link>
        <Link className="header__link header__link_saved-films" to={"/saved-movies"}>Сохранённые фильмы</Link>
        <Link className="header__button header__button_logged" to={"/profile"}>Аккаунт</Link>
      </Header>
      <SearchForm />
      <Preloader />
      <MoviesCardList
        movies={params.movies} />
      <More />
      <Footer />
    </div>
  )
}

export default Movies;