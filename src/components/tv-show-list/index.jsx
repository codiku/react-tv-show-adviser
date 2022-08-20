import { TVShowListItem } from "../tv-show-list-item";
import s from "./style.module.css";
export function TVShowList({ tvShowList }) {
  return (
    <>
      <span className={s.tvShow_list_title}>You'll probably also like...</span>
      <div className={`${s.list_container}`}>
        {tvShowList.map((tvShow) => {
          tvShow.backdrop_path =
            "https://image.tmdb.org/t/p/w300" + tvShow.backdrop_path;
          return (
            <div key={tvShow} style={{ marginRight: 50 }}>
              <TVShowListItem tvShow={tvShow} />
            </div>
          );
        })}
      </div>
    </>
  );
}
