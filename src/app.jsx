import { useEffect, useState } from "react";
import s from "./global.module.css";
import { Header } from "./components/header";
import { TVShowDetail } from "./components/tv-show-detail";
import { TVShowList } from "./components/tv-show-list";
import { TVShowAPI } from "./api/tv-show";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original/";
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [tvShowList, setTvShowList] = useState([]);
  useEffect(() => {
    setPopularTvShows();
  }, []);

  const setRecommendedTvShows = async (showId) => {
    const recommendedTVShow = await TVShowAPI.fetchRecommendationsById(showId);
    setTvShowList(recommendedTVShow.slice(1, 10));
  };

  const setPopularTvShows = async () => {
    const popularShowList = await TVShowAPI.fetchPopulars();
    setTvShowList(popularShowList.slice(1, 10));
    setCurrentTVShow(popularShowList[0]);
  };

  const onSubmitSearch = async (text) => {
    const foundTVShowList = await TVShowAPI.fetchByTerm(text);
    if (foundTVShowList.length > 0) {
      setCurrentTVShow(foundTVShowList[0]);
      setRecommendedTvShows(foundTVShowList[0].id);
    } else {
      setCurrentTVShow(null);
      setTvShowList([]);
    }
  };

  const onClickRecommendedItem = (tvShow) => {
    setCurrentTVShow(tvShow);
    setRecommendedTvShows(tvShow.id);
  };

  return (
    <>
      <div
        className={`${s.main_container}`}
        style={{
          background:
            currentTVShow && currentTVShow.id
              ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${
                  BACKDROP_BASE_URL + currentTVShow.backdrop_path
                }") no-repeat center / cover`
              : "black",
        }}
      >
        <div style={{ flex: 2 }}>
          <Header onSubmitSearch={onSubmitSearch} />
        </div>

        <>
          <div style={{ flex: 4 }}>
            {currentTVShow ? (
              <TVShowDetail tvShow={currentTVShow} />
            ) : (
              <span className={s.no_content}>No show found :/ </span>
            )}
          </div>
          <div style={{ flex: 2 }}>
            {tvShowList.length > 0 ? (
              <TVShowList
                onClickItem={onClickRecommendedItem}
                tvShowList={tvShowList}
              />
            ) : (
              currentTVShow && (
                <span className={s.no_content}>
                  No recommendations found for this show :/
                </span>
              )
            )}
          </div>
        </>
      </div>
    </>
  );
}
