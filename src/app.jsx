import { useEffect, useState } from "react";
import s from "./global.module.css";
import { Header } from "./components/header";
import bg_img from "./assets/images/bg.png";
import { TVShowDetail } from "./components/tv-show-detail";
import { TVShowList } from "./components/tv-show-list";
import { TVShowAPI } from "./api/tv-show";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original/";
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState({});
  const [tvShowList, setTvShowList] = useState([]);

  useEffect(() => {
    setPopularTvShows();
  }, []);

  /*const setRecommendedTvShows = async () => {
    const recommendedTVShow = await TVShowAPI.fetchRecommendations(
      currentTVShow.id
    );
    setTvShowList(recommendedTVShow);
  };
*/
  const setPopularTvShows = async () => {
    const popularShowList = await TVShowAPI.fetchPopulars();
    setTvShowList(popularShowList);
    setCurrentTVShow(popularShowList[0]);
  };

  return (
    <div
      className={`${s.main_container}`}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${
              BACKDROP_BASE_URL + currentTVShow.backdrop_path
            }") no-repeat center / cover`
          : null,
      }}
    >
      <div style={{ flex: 2 }}>
        <Header />
      </div>
      {tvShowList.length > 0 ? (
        <>
          <div style={{ flex: 4 }}>
            <TVShowDetail tvShow={currentTVShow} />
          </div>
          <div style={{ flex: 2 }}>
            <TVShowList tvShowList={tvShowList} />
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
}
