import React from "react";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Style from "./CountryList.module.css";
import Message from "./Message";

export default function CountryList({ isLoading, cities }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);
  return (
    <ul className={Style.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
