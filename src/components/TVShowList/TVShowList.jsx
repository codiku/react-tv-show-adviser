import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";
export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <span className={s.title}>You'll probably also like...</span>
      <div className={s.list_container}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem
                tvShow={tvShow}
                onClick={() => console.log("todo")}
              />
            </span>
          );
        })}
      </div>
    </>
  );
}
