/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav className={darkMode ? "dark-card" : ""}>
      <div className="container">
        <div className="links">
          <Link to="/" className={darkMode ? "dark-font-color logo" : "logo"}>
            Where in the world?
          </Link>

          <button
            className={
              darkMode ? "dark-font-color btn toggle-btn" : "btn toggle-btn"
            }
            onClick={handleToggle}>
            <FontAwesomeIcon icon={faMoon} size="lg" className="icon" />
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
