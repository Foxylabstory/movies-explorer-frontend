import React from "react";
import './Movies.css';
import Header from "../BaseComponents/Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
/* import Preloader from "./Preloader/Preloader"; */
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";
import Footer from "../BaseComponents/Footer/Footer";

function Movies({ searchKey, onChangeShortsCheckbox, shortsCheckbox, movies, onSubmit }) {
  return (
    <div className="movies">
      <Header />
      <SearchForm
        onChangeShortsCheckbox={onChangeShortsCheckbox}
        shortsCheckbox={shortsCheckbox}
        searchKey={searchKey}
        onSubmit={onSubmit}
      />
      <MoviesCardList
        movies={movies} />
      <More />
      <Footer />
    </div>
  )
}

export default Movies;