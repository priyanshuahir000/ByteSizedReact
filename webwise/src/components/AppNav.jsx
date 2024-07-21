import React from "react";
import Styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <div className={Styles.nav}>
      <ul>
        <li>
          <NavLink to={"cities"} className={Styles.active} >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink to={"countries"}>Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}
