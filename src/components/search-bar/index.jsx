import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar(props) {
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      props.onSubmit(e.target.value);
    }
  };

  return (
    <>
      <div style={{ flexDirection: "row" }}>
        <SearchIcon size={27} className={s.icon} />

        <input
          onKeyUp={onKeyUp}
          className={s.input}
          type="text"
          placeholder="Search a tv show you like..."
        />
      </div>
    </>
  );
}
