import s from "./style.module.css";
import logo from "../../assets/images/logo.png";
export function Header() {
  return (
    <div style={{ display: "flex" }}>
      <img src={logo} alt="logo" />

      <h2 className={s.header_txt}>Watowatch</h2>
    </div>
  );
}
