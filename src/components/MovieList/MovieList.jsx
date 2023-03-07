import { MovieListItem } from "../MovieListItem/MovieListItem"
import s from "./style.module.css"

export function MovieList({movieList, onClick}) {
    return <div>
        <div className={s.title}>You'll probably like :</div>
        <div className={s.list}>
            {
                movieList.map((movie) => {
                    return (
                        <MovieListItem
                            movie={movie}
                            onClick={onClick}
                        />
                    )
                })
            }
        </div>
    </div>
}