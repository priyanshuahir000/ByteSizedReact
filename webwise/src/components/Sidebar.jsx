import React from "react";
import Styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Web Wise Inc.
        </p>
      </footer>
    </div>
  );
}
