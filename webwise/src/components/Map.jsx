import React from "react";
import Styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={Styles.mapContainer} onClick={() => navigate("form")}>
      {searchParams}
    </div>
  );
}
