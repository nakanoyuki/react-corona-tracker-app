import React, { useState } from "react";
interface SingleCountryDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

interface WorldPageType {
  allCountriesData: Array<SingleCountryDataType>;
}

const Card = ({ allCountriesData }: WorldPageType) => {
  return (
    <div className="card-container">
      {allCountriesData.map((singleData, index) => (
        <div key={index} className="card">
          <div>
            <h2>{singleData.Country}</h2>
            <p>
              新規感染者数:
              <span>{singleData.NewConfirmed.toLocaleString()}</span>
            </p>
            <p>
              感染者総数:
              <span>{singleData.TotalConfirmed.toLocaleString()}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
