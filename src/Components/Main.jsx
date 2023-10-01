import { useState } from "react";

//* Hooks
import useMovieName from "../hooks/useMovieName";

//* Components
import Navbar from "./Navbar";
import Content from "./Content";

function MainContainer() {
  const [query, setQuery] = useState("");
  const { searchedMovies, isLoading, isError } = useMovieName(query);

  return (
    <div className="mainContainer">
      <Navbar setQuery={setQuery} searchedMovies={searchedMovies} />
      <Content
        searchedMovies={searchedMovies}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default MainContainer;
