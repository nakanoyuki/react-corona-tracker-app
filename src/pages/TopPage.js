import React from "react";
import Result from "../components/Result";
import Selector from "../components/Selector";
import Title from "../components/Title";

const Toppage = (props) => {
  return (
    <div>
      <Title />
      <Selector
        countriesJson={props.countriesJson}
        setCountry={props.setCountry}
        getCounrtyData={props.getCounrtyData}
      />
      <Result />
    </div>
  );
};

export default Toppage;
