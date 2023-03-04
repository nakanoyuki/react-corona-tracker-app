import React from "react";
import { ResultsType } from "../type";
import Loading from "./Loading";

const Result = ({ countryData, loading }: ResultsType) => {
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } =
    countryData;
  return (
    <div className="results-container">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <p>
            日付:<span>{date.slice(0, 10)}</span>
          </p>
          <p>
            新規感染者数:<span>{newConfirmed.toLocaleString()}</span>
          </p>
          <p>
            感染者総数:<span>{totalConfirmed.toLocaleString()}</span>
          </p>
          <p>
            新規回復者:<span>{newRecovered.toLocaleString()}</span>
          </p>
          <p>
            回復者総数:<span>{totalRecovered.toLocaleString()}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Result;
