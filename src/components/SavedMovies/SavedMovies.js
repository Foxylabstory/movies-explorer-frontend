import React from "react";
import './SavedMovies.css';
import { Link } from 'react-router-dom';
import Header from "../BaseComponents/Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Devider from "./Devider/Devider";
import Footer from "../BaseComponents/Footer/Footer";

function SavedMovies({ searchKey, movies, owner, onChangeShortsCheckbox, shortsCheckboxSaved, onSubmit }) {
  return (
    <div className="saved-movies">
      <Header>
        <Link className="header__link header__link_films" to={"/movies"}>Фильмы</Link>
        <Link className="header__link header__link_saved-films" to={"/saved-movies"}>Сохранённые фильмы</Link>
        <Link className="header__button header__button_logged" to={"/profile"}>Аккаунт</Link>
      </Header>
      <SearchForm
        onChangeShortsCheckbox={onChangeShortsCheckbox}
        shortsCheckboxSaved={shortsCheckboxSaved}
        searchKey={searchKey}
        onSubmit={onSubmit} />
      <MoviesCardList movies={movies} owner={owner} />
      <Devider />
      <Footer />
    </div>
  )
}

export default SavedMovies;