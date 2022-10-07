import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating}>{tvShow.vote_average / 2}/5</div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
