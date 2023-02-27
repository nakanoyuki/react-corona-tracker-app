import React from "react";

const Selector = ({countriesJson,setCountry,getCounrtyData}) => {
  return (
    <div className="selector-container">
      <select onChange={(e) => setCountry(e.target.value)}>
        <option> Select A Country</option>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={getCounrtyData}>getData</button>
    </div>
  );
};

export default Selector;
