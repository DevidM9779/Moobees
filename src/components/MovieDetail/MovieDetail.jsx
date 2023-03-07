import s from "./style.module.css"
import { StarRating } from "../StarRating/StarRating";

export function MovieDetail({movie}) {
    const rating = movie.vote_average / 2;

    return <div>
        <div className={s.title}>{movie.title}</div>
        <div className={s.rating_container}>
            <StarRating rating={rating}/>
            <span className={s.rating}>{rating}/5</span>
        </div>
        <div className={s.overview}>{movie.overview}</div>
    </div>;
}





