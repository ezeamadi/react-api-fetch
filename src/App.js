import React, { useState, useEffect } from "react";
import Card from "./component/Card";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.eu/rest/v2/all");

      const data = await response.json();
      setCountries(data);
    }

    fetchData();
  }, []);

  function searchCountry(text) {
    return countries.filter(country => country.name === text);
  }

  function countryDetail(id) {}

  return (
    <div>
      <h1>Hello World</h1>

      <input
        type="text"
        placeholder="Search for a Country"
        // onChange={searchCountry}
      />
      <button onClick={searchCountry}>Click</button>

      {countries.map(country => (
        <Card
          key={country.alpha3Code}
          name={country.name}
          area={country.area}
          capital={country.capital}
          nativeName={country.nativeName}
          subregion={country.subregion}
          region={country.region}
          borderingCountries={country.borders.length}
          population={country.population}
          timezone={country.timezones}
          id={country.alpha3Code}
          onSearch={searchCountry}
          onExpand={countryDetail}
        />
      ))}
    </div>
  );
}

export default App;
