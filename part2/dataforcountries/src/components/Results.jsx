/* eslint-disable react/prop-types */

import OneCountry from "./OneCountryDis";
import  { useState } from "react";

const Results = ({ result }) => {
  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };
  return (
    <li>
      {result.name.common} <button onClick={handleShowClick}>show</button>
      {show === true && <OneCountry key={result.name.common} result={result} />}
    </li>
  );
};

export default Results;
