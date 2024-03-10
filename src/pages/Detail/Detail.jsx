import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TVShowAPI } from "../../api/tv-show";
import { TVShowDetail } from "../../components/TVShowDetail/TVShowDetail";
import { TVShowList } from "../../components/TVShowList/TVShowList";
import { BACKDROP_BASE_URL } from "../../config";
import { ROUTES } from "../../routes/route";
import s from "./Detail.module.css";

export const Detail = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);
  const [recommendationList, setRecommendationList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    loadTvShow(id);
  }, [id]);

  useEffect(() => {
    if (tvShow) {
      loadRecommendations(tvShow.id);
    }
  }, [tvShow]);

  const loadTvShow = async (id) => {
    setIsLoading(true);
    const tvShowResponse = await TVShowAPI.fetchById(id);
    if (tvShowResponse) {
      setTvShow(tvShowResponse);
    }
    setIsLoading(false);
  };

  async function loadRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendationList(recommendations);
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries recommendées");
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={s.main_section}
      style={{
        background: tvShow
          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${BACKDROP_BASE_URL}${tvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <TVShowDetail tvShow={tvShow} />
      <div>
        <h4>If you liked {tvShow.name} you'll probably love this :</h4>
        <TVShowList
          tvShowList={recommendationList}
          onClickItem={(show) => nav(ROUTES.detail + "/" + show.id)}
          isSingleRow
          hasHozizontalItems
        />
      </div>
    </div>
  );
};
