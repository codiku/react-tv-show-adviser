import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ROUTES } from "../../routes/route";
import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import s from "./Header.module.css";

export const Header = ({ onSearchSubmit }) => {
  return (
    <div className={s.header}>
      <Link to={ROUTES.home} className={s.logo}>
        {<Logo image={logo} title="Watowatch" subtitle="Find a show you may like" />}
      </Link>
      <div className={s.searchbar_container}>
        <div className={s.searchbar}>{<SearchBar onSubmit={onSearchSubmit} />}</div>
      </div>
    </div>
  );
};
