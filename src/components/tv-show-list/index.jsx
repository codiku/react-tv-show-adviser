import { TVShowListItem } from "../tv-show-list-item";
import s from "./style.module.css";
export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <span className={s.tvShow_list_title}>You'll probably also like...</span>
      <div className={`${s.list_container}`}>
        {tvShowList.map((tvShow) => {
          return (
            <div
              key={tvShow.id}
              style={{ marginRight: 50, marginRight: 50, marginLeft: 50 }}
            >
              <TVShowListItem
                imgBaseURL={"https://image.tmdb.org/t/p/w300"}
                onClickItem={onClickItem}
                tvShow={tvShow}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
