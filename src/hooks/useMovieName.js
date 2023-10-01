import { useEffect, useState } from "react";
const MOVIES_API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export default function useMovieName(query) {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

  async function getMovies(url) {
    try {
      setIsLoading(true);
      setIsError("");
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      if (data.Response === "False") {
        if (data.Error === "Movie not found!") {
          throw new Error("Movie not Found!");
        }
      }

      setSearchedMovies(data.Search);
      setIsError("");
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const fetchApiAfterCompleteQuery = setTimeout(() => {
      if (query) {
        getMovies(`${MOVIES_API_URL}&s=${query}`);
      }
    }, 1000);

    return () => clearTimeout(fetchApiAfterCompleteQuery);
  }, [query]);

  return { searchedMovies, isLoading, isError };
}
