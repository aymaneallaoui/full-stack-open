import OneCountry from "./OneCountryDis.jsx";
import Results from "./Results.jsx";

const Choice = ({ country, result }) => {
  let filtered = [];

  if (country.length > 0) {
    filtered = result.filter((result) =>
      result.name.common.toLowerCase().includes(country.toLowerCase())
    );
  } else {
    filtered = result;
  }

  if (filtered.length > 10) {
    return "Too many matches, specify another filter";
  } else if (filtered.length === 1) {
    return filtered.map((result) => (
      <OneCountry key={result.name.common} result={result} />
    ));
  } else {
    return filtered.map((result) => (
      <Results key={result.name.common} result={result} />
    ));
  }
};

export default Choice;
