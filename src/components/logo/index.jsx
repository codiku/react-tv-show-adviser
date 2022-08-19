import s from "./style.module.css";
import logo from "../../assets/images/logo.png";
export function Logo() {
  return (
    <div style={{ display: "flex" }}>
      <img style={{ height: 40 }} src={logo} alt="logo" />
      <span className={s.logo_txt}>Watowatch</span>
    </div>
  );
}
