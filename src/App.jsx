import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail";
import { Home } from "./pages/Home/Home";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
    </BrowserRouter>
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
