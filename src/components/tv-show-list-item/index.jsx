import s from "./style.module.css";
export function TVShowListItem({ tvShow }) {
  console.log("***", tvShow);
  return (
    <div style={{ position: "relative" }}>
      <img
        alt={tvShow.name}
        src={tvShow.backdrop_path}
        style={{ borderRadius: 10 }}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
