// import movieImg from "../movie.jpg";

const WatchedList = ({ watchedMovieList, setWatchedMovieList }) => {
  function deleteMovieFromWatchedList(index) {
    const updateWatchedMovieList = [...watchedMovieList];
    updateWatchedMovieList.splice(index, 1);
    setWatchedMovieList(updateWatchedMovieList);
  }

  return (
    <ul className="watchedMovieList">
      {watchedMovieList?.map((movie, index) => {
        const { Poster, Title, imdbRating, userRating, Runtime, imdbID } =
          movie;
        return (
          <li key={imdbID} className="watchedEachMovie">
            <div className="watchedMovieImage">
              <img src={Poster} alt="" />
            </div>
            <div className="watchedMovieAbout">
              <h5>{Title}</h5>
              <div className="watchedMovieInfo">
                <p>⭐ {imdbRating}</p>
                <p>🌟 {userRating}.0</p>
                <p>⌚ {Runtime}</p>
              </div>
            </div>
            <button
              className="deleteMovieBtn"
              onClick={() => deleteMovieFromWatchedList(index)}>
              ✖
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default WatchedList;
