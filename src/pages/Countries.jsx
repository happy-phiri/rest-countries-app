/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { getCountries } from "../api/api";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function loader() {
  return getCountries();
}

const Countries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const data = useLoaderData();
  const { darkMode } = useOutletContext();

  const filterResults = (term, selectedRegion) => {
    setLoading(true);
    if (term) {
      const filteredResults = data.filter((country) => {
        return country.name.toLowerCase().includes(term.toLowerCase());
      });
      setResults(filteredResults);
    } else if (region) {
      const filteredByRegion = data.filter((country) => {
        return country.region === selectedRegion;
      });
      setResults(filteredByRegion);
    } else {
      setResults(null);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // filterResults(term, region);
  };

  const countries = searchTerm || region ? results || [] : data;

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    // filterResults(searchTerm, selectedRegion);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      filterResults(searchTerm, region);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, region]);

  return (
    <div>
      <div className="container">
        <header>
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for a Country"
              name="search"
              onChange={handleChange}
              className={darkMode ? "dark-card dark-font-color input" : "input"}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          </div>

          <div>
            <select
              name="region"
              onChange={handleRegionChange}
              className={
                darkMode ? "dark-card dark-font-color select" : "select"
              }>
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </header>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          <section className="countries-container">
            {countries.map((country) => {
              return <Card key={country.name} country={country} />;
            })}
          </section>
        )}
      </div>
    </div>
  );
};

export default Countries;
