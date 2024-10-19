import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [countryList , setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleList = country => {
        console.log('country visited');
  }
  return (
    <>
      <div>Countries</div>
      <div className="">{countries.length}</div>
      <div className="">
        <h2>VISITED COUNTRIES</h2>
        <ul></ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleList={handleList}></Country>
        ))}
      </div>
    </>
  );
}

export default Countries;
