import React from "react";
import Header from "../components/Header";
import Result from "../components/Result";
import Selector from "../components/Selector";
import Title from "../components/Title";

const Toppage = ({
  countriesJson,
  setCountry,

  countryData,
  loading
}) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector
          countriesJson={countriesJson}
          setCountry={setCountry}
     
        />
        <Result countryData={countryData} loading={loading}/>
      </div>
    </div>
  );
};

export default Toppage;
