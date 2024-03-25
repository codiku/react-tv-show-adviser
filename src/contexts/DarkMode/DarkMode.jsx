import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, toggleDarkMode, textThemeColor: isDarkMode ? "var(--light-text)" : "var(--dark-text)" }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
