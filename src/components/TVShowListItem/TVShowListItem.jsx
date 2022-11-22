import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";
export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      <img
        alt={tvShow.name}
        className={s.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
