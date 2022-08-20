import s from "./style.module.css";
const MAX_TITLE_CHAR = 20;
export function TVShowListItem({ tvShow, onClickItem, imgBaseURL }) {
  const onClick = () => {
    onClickItem(tvShow);
  };
  return (
    <div onClick={onClick} style={{ position: "relative", cursor: "pointer" }}>
      <img
        alt={tvShow.name}
        src={imgBaseURL + tvShow.backdrop_path}
        style={{ borderRadius: 10 }}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
