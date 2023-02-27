import React from "react";
import countriesJson from "../countries.json";
import { useState } from "react";

const Selector = () => {
  const [country, setCountry] = useState("");
  const handleSelect = (e) => {
    setCountry(e.target.value);
  };
  const getCounrtyData = () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <select onChange={handleSelect}>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={getCounrtyData}>getData</button>
    </>
  );
};

export default Selector;
