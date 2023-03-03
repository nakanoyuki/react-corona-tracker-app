import React from "react";
import Header from "../components/Header";
import Result from "../components/Result";
import Selector from "../components/Selector";
import Title from "../components/Title";


type TopPage = {
  countriesJson: { Country: string; Slug: string }[];
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: {
    date: string;
    newConfirmed: number;
    totalConfirmed: number;
    newRecovered: number;
    totalRecovered: number;
  };
  loading: boolean;
};
const Toppage = ({
  countriesJson,
  setCountry,
  countryData,
  loading,
}: TopPage) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector countriesJson={countriesJson} setCountry={setCountry} />
        <Result countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default Toppage;
