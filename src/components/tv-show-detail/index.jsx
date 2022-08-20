import { FiveStarRating } from "../five-star-rating";
import s from "./style.module.css";
export function TVShowDetail({ tvShow }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className={s.title}>{tvShow.name}</span>
      <div className={s.stars_container}>
        <FiveStarRating rating={tvShow.vote_average / 2} />
        <span style={{ marginTop: 2 }}>{tvShow.vote_average / 2} / 5</span>
      </div>
      <div className="row">
        <div className={`col-sm-12 col-md-8 ${s.description}`}>
          {tvShow.overview}
        </div>
      </div>
    </div>
  );
}
