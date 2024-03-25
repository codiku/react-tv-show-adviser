import { AiOutlineSearch } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useDarkMode } from "../../contexts/DarkMode/DarkMode";
import { ROUTES } from "../../routes/route";
import { Clock } from "../Clock/Clock";
import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import s from "./Header.module.css";

export const Header = ({ onSearchSubmit }) => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={s.header} style={{ justifyContent: onSearchSubmit ? "normal" : "space-between" }}>
      <Link to={ROUTES.home} className={s.logo}>
        {<Logo image={logo} title="Watowatch" subtitle="Find a show you may like" />}
      </Link>
      {onSearchSubmit && (
        <div className={s.searchbar_container}>
          <div className={s.searchbar}>
            {
              <SearchBar
                onSubmit={onSearchSubmit}
                icon={<AiOutlineSearch size={27} />}
                placeholder="Search a tv show you may like"
              />
            }
          </div>
        </div>
      )}

      <div className={s.darkmode_btn}>
        {location.pathname === "/" && <Clock />}
        <div onClick={toggleDarkMode}>{isDarkMode ? <MdLightMode /> : <MdDarkMode className={s.darkmode_icon} />}</div>
      </div>
    </div>
  );
};
