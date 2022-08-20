import { TVShowListItem } from "../tv-show-list-item";
import s from "./style.module.css";
export function TVShowList(props) {
  return (
    <>
      <span className={s.tvShow_list_title}>You'll probably also like...</span>
      <div className={`${s.list_container}`}>
        {[1, 2, 3, 4].map((tvShow) => (
          <div key={tvShow} style={{ marginRight: 50 }}>
            <TVShowListItem tvShow={tvShow} />
          </div>
        ))}
      </div>
    </>
  );
}
