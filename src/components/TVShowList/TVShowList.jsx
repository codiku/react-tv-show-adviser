import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShowList, onClickItem, hasHozizontalItems = true, isSingleRow }) {
  return (
    <div style={{ display: "flex", flexWrap: isSingleRow ? "nowrap" : "wrap", overflowX: "auto" }}>
      {tvShowList.map((tvShow) => {
        return (
          <div key={tvShow.id} style={{ margin: 10 }}>
            <TVShowListItem onClick={onClickItem} tvShow={tvShow} isHorizontal={hasHozizontalItems} />
          </div>
        );
      })}
    </div>
  );
}
