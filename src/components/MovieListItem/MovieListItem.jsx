import s from "./style.module.css"
import { SMALL_IMG_COVER_BASE_URL } from "../../config"
import generic from "../../assets/images/genericMovie.jpg"

export function MovieListItem({ movie, onClick }) {

    const onClick_ = () => {
        onClick(movie);
    }

    return <div onClick={onClick_} className="s.container">
        <img 
            src={movie.backdrop_path 
                ? SMALL_IMG_COVER_BASE_URL + movie.backdrop_path 
                : generic } 
            alt={movie.title}
            className={s.img} 
        />
        <div className={s.title}>
            {movie.title}
        </div>
    </div>  
}