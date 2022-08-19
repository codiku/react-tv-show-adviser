import { MovieListItem } from "../movie-list-item";
import s from "./style.module.css";
export function MovieList(props) {
  return (
    <div className={`${s.container}`}>
      {[1, 2, 3, 4].map((movie) => (
        <div style={{ paddingRight: 50 }}>
          <MovieListItem movie={movie} />
        </div>
      ))}
    </div>
  );
}
