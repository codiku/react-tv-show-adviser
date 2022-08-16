import s from "./global.module.css";
import { useState } from "react";
import { Header } from "./components/header";
import bg_img from "./assets/images/bg.png";
export function App() {
  return (
    <div
      className={`${s.main_container}`}
      style={{
        backgroundColor: "black",
        //   background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("${bg_img}") no-repeat center / cover`,
      }}
    >
      <Header />
    </div>
  );
}
