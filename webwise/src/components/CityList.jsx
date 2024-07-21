import React from "react";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Style from "./CityList.module.css";
import Message from "./Message";

export default function CityList({ isLoading, cities }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={Style.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
