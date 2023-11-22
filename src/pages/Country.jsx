/* eslint-disable react-refresh/only-export-components */
import {
  useParams,
  useLoaderData,
  Link,
  useOutletContext,
} from "react-router-dom";
import { getCountries } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function loader() {
  return getCountries();
}

const Country = () => {
  const data = useLoaderData();
  const params = useParams();
  const { darkMode } = useOutletContext();

  const selectedCountry = data.find((country) => {
    return country.name === params.name;
  });

  const {
    name,
    borders,
    capital,
    currencies,
    flag,
    languages,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
  } = selectedCountry;

  const countryCurrencies = currencies.map((currency) => currency.name);

  const spokenLanguages = languages.map((language) => language.name);

  const neighborCountries = borders
    ? data.filter((country) => {
        for (const border of borders) {
          if (country.alpha3Code === border) {
            return country;
          }
        }
      })
    : null;

  return (
    <div>
      <div className="container">
        <Link
          to=".."
          className={
            darkMode ? "dark-card dark-font-color btn back-btn" : "btn back-btn"
          }>
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          Back
        </Link>
        <div className="country">
          <div className="country-image">
            <img src={flag} alt={`flag of ${name}`} />
          </div>

          <div className="country-details">
            <h3
              className={
                darkMode ? "dark-font-color name" : "name light-font-color"
              }>
              {name}
            </h3>
            <div className="top">
              <p className={darkMode ? "dark-font-color" : "light-font-color"}>
                Native Name:
                <span
                  className={
                    darkMode ? "dark-card-text-light" : "light-card-text-light"
                  }>
                  {" "}
                  {nativeName}
                </span>
              </p>
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
                Sub Region:{" "}
                <span
                  className={
                    darkMode ? "dark-card-text-light" : "light-card-text-light"
                  }>
                  {subregion}
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

            <div className="bottom">
              <p className={darkMode ? "dark-font-color" : "light-font-color"}>
                Top Level Domain:{" "}
                <span
                  className={
                    darkMode ? "dark-card-text-light" : "light-card-text-light"
                  }>
                  {topLevelDomain}
                </span>
              </p>
              <p className={darkMode ? "dark-font-color" : "light-font-color"}>
                Currencies:{" "}
                <span
                  className={
                    darkMode ? "dark-card-text-light" : "light-card-text-light"
                  }>
                  {countryCurrencies.join(", ")}
                </span>
              </p>
              <p className={darkMode ? "dark-font-color" : "light-font-color"}>
                Languages:{" "}
                <span
                  className={
                    darkMode ? "dark-card-text-light" : "light-card-text-light"
                  }>
                  {spokenLanguages.join(", ")}
                </span>
              </p>
            </div>

            {borders && (
              <div className="border-countries">
                <p
                  className={darkMode ? "dark-font-color" : "light-font-color"}>
                  Border Countries:
                </p>
                <div className="border-countries-names">
                  {neighborCountries.map((country) => {
                    return (
                      <Link
                        to={`../${country.name}`}
                        key={country.name}
                        className={
                          darkMode
                            ? "dark-card dark-font-color border link"
                            : "border light-card-text-light link"
                        }>
                        {country.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
