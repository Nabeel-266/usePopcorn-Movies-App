import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";

const MovieDetails = ({
  selectedMovieId,
  setSelectedMovieId,
  selectMovieInfo,
  watchedMovieList,
  setWatchedMovieList,
}) => {
  const [ratings, setRatings] = useState(0);
  const [starPosition, setStarPosition] = useState(0);

  // Check Is this Movie Watched Before or Not
  const isWatched = watchedMovieList
    .map((movie) => movie.imdbID)
    .includes(selectedMovieId);

  // Check How many Ratings Give User to this Movie
  const userRatingsAboutWatchedMovie = watchedMovieList.find(
    (movie) => movie.imdbID === selectedMovieId
  )?.userRating;

  const {
    Actors,
    Director,
    Genre,
    Plot,
    Poster,
    Released,
    Runtime,
    Title,
    Writer,
    imdbRating,
    imdbID,
  } = selectMovieInfo;

  function addMovieInWatchedList() {
    const watchedMovie = {
      Poster,
      Title,
      imdbRating,
      userRating: ratings,
      Runtime,
      imdbID,
    };
    setWatchedMovieList([...watchedMovieList, watchedMovie]);
    setSelectedMovieId(null);
  }

  return (
    <div className="movieDetails">
      <header className="movieDetailsHeader">
        <button
          className="backBtn"
          onClick={() => {
            setSelectedMovieId(null);
          }}>
          <FaArrowLeftLong />
        </button>
        <div className="headerImage">
          <img src={Poster} alt="Poster" />
        </div>
        <div className="headerText">
          <h2>
            <abbr title={Title}>{Title}</abbr>
          </h2>
          <p>
            {Released} - {Runtime}
          </p>
          <p>{Genre}</p>
          <p>⭐ {imdbRating} IMDb Rating</p>
        </div>
      </header>

      <div className="movieDetailsAbout">
        <section className="yourRatingsSection">
          {!isWatched ? (
            <h6>
              If you had watched this movie then you can share your rating about
              this movie.
            </h6>
          ) : (
            ""
          )}
          <div className="ratingBlock">
            {!isWatched ? (
              <>
                <div className="ratingsStars">
                  {Array.from({ length: 10 }, (_, i) => (
                    <span
                      key={i}
                      onClick={() => setRatings(i + 1)}
                      onMouseOver={() => setStarPosition(i + 1)}
                      onMouseLeave={() => setStarPosition(0)}>
                      {(starPosition ? starPosition > i : ratings > i) ? (
                        <AiFillStar />
                      ) : (
                        <AiOutlineStar />
                      )}
                    </span>
                  ))}
                  <p className="ratingCount">
                    {starPosition ? starPosition : ratings ? ratings : ""}
                  </p>
                </div>
                <button
                  className="addToListBtn"
                  onClick={() => addMovieInWatchedList()}
                  style={ratings ? { display: "block" } : { display: "none" }}>
                  Add to List
                </button>
              </>
            ) : (
              <p>
                You Rated this Movie to {userRatingsAboutWatchedMovie}/10 🌟
              </p>
            )}
          </div>
        </section>

        <OtherMovieDetails
          Plot={Plot}
          Actors={Actors}
          Director={Director}
          Writer={Writer}
        />
      </div>
    </div>
  );
};

const OtherMovieDetails = ({ Plot, Actors, Director, Writer }) => {
  return (
    <>
      <div className="moviePlot">
        <p>
          <span>Plot -</span> {Plot}
        </p>
      </div>

      <div className="movieActors">
        <p>
          <span>Starring -</span> {Actors}
        </p>
      </div>

      <div className="movieActors">
        <p>
          <span>Director -</span> {Director}
        </p>
      </div>

      <div className="movieActors">
        <p>
          <span>Writer -</span> {Writer}
        </p>
      </div>
    </>
  );
};

export default MovieDetails;
