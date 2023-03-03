import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Title from "../components/Title";

interface SingleCountryDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

interface WorldPageType {
  allCountriesData: Array<SingleCountryDataType>;
}

const WorldPage = ({ allCountriesData }: WorldPageType) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;
