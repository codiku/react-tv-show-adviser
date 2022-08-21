import s from "./style.module.css";
export function Logo({ image, text }) {
  return (
    <div style={{ display: "flex" }}>
      <img style={{ height: 40 }} src={image} alt="logo" />
      <span className={s.logo_txt}>{text}</span>
    </div>
  );
}
