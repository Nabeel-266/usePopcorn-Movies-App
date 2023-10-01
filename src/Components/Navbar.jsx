import "../App.css";
import Logo from "../Logo.png";

const Navbar = ({ setQuery, searchedMovies }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h2>usePopcorn</h2>
      </div>
      <div className="search">
        <input
          type="search"
          id="searchMovieInput"
          placeholder="Search Movies..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="result">
        <p>
          Found <strong>{searchedMovies?.length || 0}</strong> results
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
