import { useDarkMode } from "../../contexts/DarkMode/DarkMode";
import s from "./style.module.css";
export function SearchBar({ onSubmit, icon, placeholder, onChange }) {
  const { isDarkMode, textThemeColor } = useDarkMode();

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit?.(e.target.value);
    }
  }
  function handleChange(e) {
    onChange?.(e.target.value.trim());
  }
  return (
    <div>
      <span className={s.icon}>{icon}</span>
      <input
        style={{
          color: textThemeColor,
          backgroundColor: isDarkMode ? "#d9d9d96e" : "transparent",
          opacity: isDarkMode ? 0.3 : 0.8,
          border: isDarkMode ? "none" : "3px solid #d9d9d96e",
        }}
        onChange={handleChange}
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
