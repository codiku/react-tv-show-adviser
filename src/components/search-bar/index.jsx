import s from "./style.module.css";
export function SearchBar() {
  return (
    <input className={s.input} type="text" placeholder="Search a tv show..." />
  );
}
