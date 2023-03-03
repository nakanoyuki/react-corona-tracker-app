import React from "react";

type SelectType = {
  countriesJson: { Country: string; Slug: string }[];
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

const Selector = ({ countriesJson, setCountry }: SelectType) => {
  return (
    <div className="selector-container">
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
