import React from "react";

function Card(props) {
  function handleClick() {
    props.onExpand(props.id);
  }

  return (
    <div className="card">
      <h1>{props.name}</h1>

      <img
        alt="country-flag"
        src={`https://restcountries.eu/data/${props.id.toLowerCase()}.svg`}
        style={{ height: "200px", width: "200px" }}
      />

      <p>
        {props.name} covers a land mass of {props.area} kilometers. It's capital
        city is {props.capital}. The native name of {props.name} is{" "}
        {props.nativeName}. It is located in the sub-continent of{" "}
        {props.subregion} in {props.region}. It shares a border with{" "}
        {props.borderingCountries} other countries. The total population of the
        country is {props.population} and it is in the {props.timezone} time
        zone.
      </p>

      <button onClick={handleClick}>Click for More Details</button>
    </div>
  );
}

export default Card;
