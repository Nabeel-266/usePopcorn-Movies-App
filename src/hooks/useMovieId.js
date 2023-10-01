import { useEffect, useState } from "react";
const MOVIES_API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export default function useMovieId(selectedMovieId) {
  const [wasLoaded, setWasLoaded] = useState(false);
  const [selectMovieInfo, setSelectMovieInfo] = useState([]);

  async function getMovie(url) {
    try {
      setWasLoaded(true);
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);

      if (data.Response === "False") {
        throw new Error("Movie not Found!");
      }

      setSelectMovieInfo(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setWasLoaded(false);
    }
  }

  useEffect(() => {
    const fetchApiAfterCompleteQuery = setTimeout(() => {
      if (selectedMovieId) {
        getMovie(`${MOVIES_API_URL}&i=${selectedMovieId}`);
      }
    }, 1000);

    return () => clearTimeout(fetchApiAfterCompleteQuery);
  }, [selectedMovieId]);

  return { selectMovieInfo, wasLoaded };
}
