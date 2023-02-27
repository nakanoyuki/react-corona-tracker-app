import React from "react";
import Result from "../components/Result";
import Selector from "../components/Selector";
import Title from "../components/Title";

const Toppage = (props) => {
  return (
    <div className="top-page-container">
      <div>
        <Title />
        <Selector
          countriesJson={props.countriesJson}
          setCountry={props.setCountry}
          getCounrtyData={props.getCounrtyData}
        />
        <Result countryData={props.countryData} />
      </div>
    </div>
  );
};

export default Toppage;
