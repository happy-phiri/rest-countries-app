/* eslint-disable react/prop-types */
import { Link, useOutletContext } from "react-router-dom";
const Card = (props) => {
  const { darkMode } = useOutletContext();
  const { name, population, region, capital, flag } = props.country;

  return (
    <div
      className={
        darkMode ? "dark-card dark-font-color card" : "card light-card"
      }>
      <Link to={name} className="link">
        <div className="card-image">
          <img src={flag} alt="" loading="lazy" />
        </div>
        <div className="card-details">
          <h3
            className={
              darkMode ? "dark-font-color name" : "name light-font-color"
            }>
            {name}
          </h3>
          <p className={darkMode ? "dark-font-color" : "light-font-color"}>
            Population:{" "}
            <span
              className={
                darkMode ? "dark-card-text-light" : "light-card-text-light"
              }>
              {population.toLocaleString()}
            </span>
          </p>
          <p className={darkMode ? "dark-font-color" : "light-font-color"}>
            Region:{" "}
            <span
              className={
                darkMode ? "dark-card-text-light" : "light-card-text-light"
              }>
              {region}
            </span>
          </p>
          <p className={darkMode ? "dark-font-color" : "light-font-color"}>
            Capital:{" "}
            <span
              className={
                darkMode ? "dark-card-text-light" : "light-card-text-light"
              }>
              {capital}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
