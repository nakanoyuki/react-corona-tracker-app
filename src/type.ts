// type
export type CountryDataType = {
  date: string;
  newConfirmed: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecovered: number;
};

type countriesJsonType = { Country: string; Slug: string }[];

export type TopPage = {
  countriesJson:countriesJsonType
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: CountryDataType;
  loading: boolean;
};

export type SelectType = {
  countriesJson:countriesJsonType
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

export type ResultsType = {
  countryData: {
    date: string;
    newConfirmed: number;
    totalConfirmed: number;
    newRecovered: number;
    totalRecovered: number;
  };
  loading: boolean;
};

// interface
interface SingleCountryDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

export interface AllCountryDataTypeArry extends Array<SingleCountryDataType> {}

interface SingleCountryDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

export interface WorldPageType {
  allCountriesData: Array<SingleCountryDataType>;
}


export interface CardType {
  allCountriesData: Array<SingleCountryDataType>;
}