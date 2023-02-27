import { useState } from "react";
import "./App.css";
import TopPage from "./pages/TopPage";
import countriesJson from "./countries.json";

function App() {
  const [country, setCountry] = useState();
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

  const getCounrtyData = () => {
    fetch(
      `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
    )
      .then((res) => res.json())
      .then((data) => setCountryData());
  };
  return (
    <div className="App">
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCounrtyData={getCounrtyData}
      />
    </div>
  );
}

export default App;
