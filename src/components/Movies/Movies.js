import './Movies.css';
import Header from "../BaseComponents/Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
/* import Preloader from "./Preloader/Preloader"; */
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";
import Footer from "../BaseComponents/Footer/Footer";

function Movies({
  searchKey,
  onChangeShortsCheckbox,
  shortsCheckbox,
  movies,
  shortMovies,
  onSubmit,
  preloader,
  errorText,
  handleShowMoreMovies,
  displayMeMovies,
  handlePutOrDeleteLike,
  isMovieAlreadySaved,
}) {

  return (
    <div className="movies">
      <Header />
      <SearchForm
        onChangeShortsCheckbox={onChangeShortsCheckbox}
        shortsCheckbox={shortsCheckbox}
        searchKey={searchKey}
        onSubmit={onSubmit}
        errorText={errorText}
      />
      <MoviesCardList
        displayMeMovies={displayMeMovies}
        movies={!shortsCheckbox ? movies : shortMovies}
        preloader={preloader}
        /* errorText={errorText} */
        handlePutOrDeleteLike={handlePutOrDeleteLike}
        isMovieAlreadySaved={isMovieAlreadySaved}
      />
      {movies && !shortsCheckbox && displayMeMovies < movies.length && <More handleShowMoreMovies={handleShowMoreMovies} />}
      {shortMovies && shortsCheckbox && displayMeMovies < shortMovies.length && <More handleShowMoreMovies={handleShowMoreMovies} />}
      <Footer />
    </div>
  )
}

export default Movies;