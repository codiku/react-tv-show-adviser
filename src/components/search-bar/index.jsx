import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar() {
  return (
    <>
      <div style={{ flexDirection: "row" }}>
        <SearchIcon size={27} className={s.icon} />

        <input
          className={s.input}
          type="text"
          placeholder="Search a tv show you like..."
        />
      </div>
    </>
  );
}
