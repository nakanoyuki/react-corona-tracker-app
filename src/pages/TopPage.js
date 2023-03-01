import React from "react";
import Header from "../components/Header";
import Result from "../components/Result";
import Selector from "../components/Selector";
import Title from "../components/Title";

const Toppage = ({
  countriesJson,
  setCountry,
  getCounrtyData,
  countryData,
}) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector
          countriesJson={countriesJson}
          setCountry={setCountry}
          getCounrtyData={getCounrtyData}
        />
        <Result countryData={countryData} />
      </div>
    </div>
  );
};

export default Toppage;
