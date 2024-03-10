import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";
export function TVShowListItem({ tvShow, onClick, isHorizontal = true }) {
  return (
    <div onClick={() => onClick(tvShow)} className={isHorizontal ? s.container_h : s.container_v}>
      <img
        alt={tvShow.name}
        className={s.img}
        style={{ height: isHorizontal ? "auto" : "300px" }}
        src={SMALL_IMG_COVER_BASE_URL + (isHorizontal ? tvShow.backdrop_path : tvShow.poster_path)}
      />
      {/* <div className={s.title}>{tvShow.name}</div> */}
    </div>
  );
}
