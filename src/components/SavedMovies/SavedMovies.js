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
  savedMovies,
  shortSavedMovies,
  onChangeShortsCheckbox,
  shortsCheckboxSaved,
  onSubmit,
  preloader,
  errorText,
  handleDeleteMovie,
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
        savedMovies={!shortsCheckboxSaved ? savedMovies : shortSavedMovies}
        preloader={preloader}
        errorText={errorText}
        handleDeleteMovie={handleDeleteMovie}
      />
      <Devider />
      <Footer margin={savedMovies.length} />
    </div>
  )
}

export default SavedMovies;