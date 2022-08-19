import s from "./global.module.css";
import { Header } from "./components/header";
import bg_img from "./assets/images/bg.png";
import { MovieDetail } from "./components/movie-detail";
import { MovieList } from "./components/movie-list";
export function App() {
  return (
    <div
      className={`${s.main_container}`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${bg_img}") no-repeat center / cover`,
      }}
    >
      <div className="row" style={{ flex: 2 }}>
        <Header />
      </div>
      <div className="row" style={{ flex: 4 }}>
        <MovieDetail />
      </div>
      <div className="row" style={{ flex: 2 }}>
        <span className={s.movie_list_title}>You'll probably also like...</span>
        <div style={{ marginTop: 30 }}>
          <MovieList />
        </div>
      </div>
    </div>
  );
}
