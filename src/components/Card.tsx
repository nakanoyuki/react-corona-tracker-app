import React, { useState } from "react";
import { CardType } from "../type";

const Card = ({ allCountriesData }: CardType) => {
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
