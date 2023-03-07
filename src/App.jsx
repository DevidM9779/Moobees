import s from "./style.module.css";
import { useEffect, useState } from "react";
import { MovieAPI } from "./api/movie";
import { BACKDROP_BASE_URL, BASE_URL } from "./config";
import { MOCK_DATA } from "./api/mock_data";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png"

export function App() {
  const [currentMovie, setCurrentMovie] = useState(MOCK_DATA);

  async function fetchPopulars() {
    const popularMovieList = await MovieAPI.fetchPopulars();
    if (popularMovieList.length > 0) setCurrentMovie(popularMovieList[0]);
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

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
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.movie_data}>
        {currentMovie && <MovieDetail movie={currentMovie} />}
      </div>
      <div className={s.advised_shows}>Recommended shows</div>
    </div>
  );
}