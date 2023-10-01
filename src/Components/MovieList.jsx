const MovieList = ({ searchedMovies, setSelectedMovieId }) => {
  return (
    <ul className="movieList">
      {searchedMovies?.map((movie) => {
        const { imdbID, Poster, Title, Year } = movie;

        return (
          <li
            key={imdbID}
            className="eachMovie"
            onClick={() => setSelectedMovieId(imdbID)}>
            <div className="movieImage">
              <img src={Poster} alt={imdbID} />
            </div>
            <div className="movieAbout">
              <h5>{Title}</h5>
              <p>📅 {Year}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
