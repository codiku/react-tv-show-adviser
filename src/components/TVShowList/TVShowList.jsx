import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
export function TVShowList({ tvShowList, onClickItem, hasHozizontalItems = true }) {
  return tvShowList.map((tvShow) => {
    return (
      <div key={tvShow.id} style={{ margin: 10 }}>
        <TVShowListItem onClick={onClickItem} tvShow={tvShow} isHorizontal={hasHozizontalItems} />
      </div>
    );
  });
}
