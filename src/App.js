import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import TopPage from "./pages/TopPage";
import countriesJson from "./countries.json";
import WorldPage from "./pages/WorldPage";

function App() {
  // getDataボタン押したらtrue(ローディング表示)
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("japan");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

  const [allCountriesData, setallCountriesData] = useState([]);

  useEffect(() => {
    const getCounrtyData = () => {
      setLoading(true);
      fetch(
        `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCountryData({
            date: data[data.length - 1].Date,
            newConfirmed:
              data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
            totalConfirmed: data[data.length - 1].Confirmed,
            newRecovered:
              data[data.length - 1].Recovered - data[data.length - 2].Recovered,
            totalRecovered: data[data.length - 1].Recovered,
          });
          // データ取得完了、データ書き込まれた後
          setLoading(false);
        })
        .catch((err) => alert("エラーが発生しました"));
    };
    getCounrtyData();
  }, [country]);

  useEffect(() => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then((res) => res.json())
      .then((data) => setallCountriesData(data.Countries))
      .catch((err) => alert("エラーが発生"));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TopPage
                countriesJson={countriesJson}
                setCountry={setCountry}
                countryData={countryData}
                loading={loading}
              />
            }
          />
          <Route
            path="/world"
            element={<WorldPage allCountriesData={allCountriesData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
