import s from "./global.module.css";
import { useState } from "react";
import { Header } from "./components/header";
import bg_img from "./assets/images/bg.png";
import { SearchBar } from "./components/search-bar";
export function App() {
  return (
    <div
      className={`${s.main_container}`}
      style={{
        //  backgroundColor: "black",
        background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${bg_img}") no-repeat center / cover`,
      }}
    >
      <div className="row">
        <div className="col-4">
          <Header />
        </div>
        <div className="col-4 pull-4">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
