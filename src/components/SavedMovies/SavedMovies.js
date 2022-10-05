import React from "react";
import './SavedMovies.css';
/* import { Link } from 'react-router-dom'; */
import Header from "../BaseComponents/Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Devider from "./Devider/Devider";
import Footer from "../BaseComponents/Footer/Footer";

function SavedMovies({
  searchKey,
  movies,
  shortMovies,
  owner,
  onChangeShortsCheckbox,
  shortsCheckboxSaved,
  onSubmit,
  preloader,
  errorText,
}) {
  return (
    <div className="saved-movies">
      <Header />
      <SearchForm
        onChangeShortsCheckbox={onChangeShortsCheckbox}
        shortsCheckboxSaved={shortsCheckboxSaved}
        searchKey={searchKey}
        onSubmit={onSubmit} />
      <MoviesCardList
        movies={!shortsCheckboxSaved ? movies : shortMovies}
        owner={owner}
        preloader={preloader}
        errorText={errorText}
      />
      <Devider />
      <Footer margin={movies.length} />
    </div>
  )
}

export default SavedMovies;