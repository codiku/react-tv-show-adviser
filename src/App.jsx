import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import logo from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires " + error.message);
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendationList(recommendations);
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries recommendées");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche de la série ");
    }
  }
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.90) 50%, rgba(0,0,0,0) 50%), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className={s.logo}>{<Logo image={logo} title="Watowatch" subtitle="Find a show you may like" />}</div>
        <div className={s.searchbar_container}>
          <div className={s.searchbar}>{<SearchBar onSubmit={searchTVShow} />}</div>
        </div>
      </div>
      <div className={s.list}>
        <TVShowList onClickItem={setCurrentTVShow} tvShowList={recommendationList} hasHozizontalItems={false} />
      </div>
    </div>
  );
}

/*
  <div className={s.header}>
        <div className="">
          <div>{ <Logo image={logo} title="Watowatch" subtitle="Find a show you may like" /> }</div>
          <div className="">{ <SearchBar onSubmit={searchTVShow} />}</div>
        </div>
      </div>



  style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}

      */
/* <div className={s.recommended_shows}>
        {recommendationList && recommendationList.length > 0 && (
          <div>
            <div className={s.title}>You may also like:</div>
            <div className={s.list}>
              <TVShowList onClickItem={setCurrentTVShow} tvShowList={recommendationList} />
            </div>
          </div>
        )}
      </div> */
/* <div
            className={s.tv_show_detail}
            style={{
              background: currentTVShow
                ? `linear-gradient(rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 25%), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                : "black",
            }}
          >
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
          </div> */
