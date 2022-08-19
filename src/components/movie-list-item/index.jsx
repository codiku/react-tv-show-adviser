import s from "./style.module.css";
export function MovieListItem(props) {
  return (
    <div style={{ position: "relative" }}>
      <img
        alt={props.movie}
        src={"https://fakeimg.pl/350x200/?text=" + props.movie}
        style={{ borderRadius: 10 }}
      />
      <div className={s.title}>Hello</div>
    </div>
  );
}
