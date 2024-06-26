import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StaticRating from "./StartRating";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StaticRating maxRating={10} />
  </React.StrictMode>
);
