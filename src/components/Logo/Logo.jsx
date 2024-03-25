import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo.png";
import { useDarkMode } from "../../contexts/DarkMode/DarkMode";
import s from "./style.module.css";

export function Logo({ title, subtitle }) {
  const { isDarkMode, textThemeColor } = useDarkMode();
  return (
    <>
      <div className={s.container} style={{ color: textThemeColor }}>
        <img src={isDarkMode ? logoLight : logoDark} className={s.img} alt="logo" />
        <span className={s.title} style={{ color: textThemeColor }}>
          {title}
        </span>
      </div>
      <span className={s.subtitle} style={{ color: textThemeColor }}>
        {subtitle}
      </span>
    </>
  );
}
