import s from "./style.module.css";
import logo from "../../assets/images/logo.png";
export function Header() {
  return (
    <div style={{ display: "flex" }}>
      <img style={{ height: 53 }} src={logo} alt="logo" />
      <span className={s.header_txt}>Watowatch</span>
    </div>
  );
}
