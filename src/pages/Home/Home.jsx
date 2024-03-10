import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TVShowAPI } from "../../api/tv-show";
import { Header } from "../../components/Header/Header";
import { TVShowList } from "../../components/TVShowList/TVShowList";
import { BACKDROP_BASE_URL } from "../../config";
import { ROUTES } from "../../routes/route";
import s from "./Home.module.css";

export function Home() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [searchResultList, setSearchResultList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    loadPopulars();
  }, []);

  async function loadPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
        setSearchResultList(populars);
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires " + error.message);
    }
  }

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
        setSearchResultList(searchResponse);
      }
    } catch (error) {
      alert("Erreur durant la recherche de la série ");
    }
  }

  return (
    <div
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
        padding: 25,
      }}
    >
      <Header onSearchSubmit={searchTVShow} />
      <div className={s.list}>
        <TVShowList
          isSingleRow={false}
          onClickItem={(tvShow) => nav(ROUTES.detail + "/" + tvShow.id)}
          tvShowList={searchResultList}
          hasHozizontalItems={false}
        />
      </div>
    </div>
  );
}
