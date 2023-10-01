const WatchedSummary = ({ watchedMovieList }) => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(
    watchedMovieList.map((movie) => movie.imdbRating)
  );
  const avgUserRating = average(
    watchedMovieList.map((movie) => movie.userRating)
  );
  const avgRuntime = average(
    watchedMovieList.map((movie) => movie.Runtime.split(" ")[0])
  );

  return (
    <div className="summary">
      <h3 className="summaryHd">Movies You Watched</h3>

      <div className="summaryCategories">
        <p>
          <span>🎬</span> {watchedMovieList.length} movies
        </p>
        <p>
          <span>⭐</span> {avgImdbRating.toFixed(1)}
        </p>
        <p>
          <span>🌟</span> {avgUserRating.toFixed(1)}
        </p>
        <p>
          <span>⌚</span> {avgRuntime.toFixed(1)} min
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
