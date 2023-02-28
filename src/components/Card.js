import React, { useState } from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      {props.allCountriesData.map((singleData, index) => (
        <div key={index} className="card">
          <div>
            <h2>{singleData.Country}</h2>
            <p>
              新規感染者数:<span>{singleData.NewConfirmed}</span>
            </p>
            <p>
              感染者総数:<span>{singleData.TotalConfirmed}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
