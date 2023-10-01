import { useState } from "react";

//* Components
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";

//* Hooks
import useMovieId from "../hooks/useMovieId";

const Content = ({ searchedMovies, isLoading, isError }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { selectMovieInfo, wasLoaded } = useMovieId(selectedMovieId);
  const [watchedMovieList, setWatchedMovieList] = useState([]);

  return (
    <div className="contentArea">
      <section className="childBox childBoxLeft">
        {isLoading && <p className="loader">Loading...</p>}
        {isError && <p className="error">{isError}</p>}
        {!isLoading && !isError && (
          <MovieList
            searchedMovies={searchedMovies}
            setSelectedMovieId={setSelectedMovieId}
          />
        )}
      </section>
      <section className="childBox childBoxRight">
        {!selectedMovieId ? (
          <div className="watchedMovies">
            <WatchedSummary watchedMovieList={watchedMovieList} />
            <WatchedList
              watchedMovieList={watchedMovieList}
              setWatchedMovieList={setWatchedMovieList}
            />
          </div>
        ) : wasLoaded ? (
          <p className="loader">Loading...</p>
        ) : (
          <MovieDetails
            selectedMovieId={selectedMovieId}
            setSelectedMovieId={setSelectedMovieId}
            selectMovieInfo={selectMovieInfo}
            watchedMovieList={watchedMovieList}
            setWatchedMovieList={setWatchedMovieList}
          />
        )}
      </section>
    </div>
  );
};

export default Content;
