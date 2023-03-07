import s from "./style.module.css";
import { useEffect, useState } from "react";
import { MovieAPI } from "./api/movie";
import { BACKDROP_BASE_URL, BASE_URL } from "./config";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png"
import { MovieListItem } from "./components/MovieListItem/MovieListItem";
import { MovieList } from "./components/MovieList/MovieList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentMovie, setCurrentMovie] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentMovie) {
      // console.log("fetching recommendations for " + currentMovie.title)
      fetchRecommendations(currentMovie.id)
    }
  }, [currentMovie]);

  async function fetchPopulars() {
    try {
      const popularMovieList = await MovieAPI.fetchPopulars();
      if (popularMovieList.length > 0) setCurrentMovie(popularMovieList[0]);
    } 
    catch (e) {
      alert("Something went wrong when fetching popular movies from the database.")
    }
    
  }

  async function fetchRecommendations(movieId) {
    try {
      const recommendedMovieList = await MovieAPI.fetchRecommended(movieId);
      // console.log(recommendedMovieList)
      if (recommendedMovieList.length > 0) setRecommendationList(recommendedMovieList.slice(0,10));
    } 
    catch (e) {
      alert("Something went wrong when fetching recommended movies.")
    }
    
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await MovieAPI.fetchByTitle(title);
      // console.log(searchResponse)
      if (searchResponse.length > 0) setCurrentMovie(searchResponse[0]);
    }
    catch (e) {
      alert("Something went wrong when searching the movie: " + title)
    }

  }

  function updateMovie(movie) {
    setCurrentMovie(movie)
  }


  return (
    <div
      className={s.main_container}
      style={{
        background: currentMovie
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentMovie.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo 
              img={logoImg} 
              title={"Moobees"} 
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle}/>
          </div>
        </div>
      </div>
      <div className={s.movie_data}>
        {currentMovie && <MovieDetail movie={currentMovie} />}
      </div>
      <div className={s.advised_shows}>
        {currentMovie && <MovieList movieList={recommendationList} onClick={updateMovie}/>}
      </div>
    </div>
  );
}