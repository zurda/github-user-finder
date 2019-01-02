import React from "react";
import logo from "../public/img/logo.png";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <Link to="/">
      <div className="app-header">
        <img className="logo" src={logo} alt="Github Profile Display Logo" />
        <h1 className="title">Github Profiles</h1>
      </div>
    </Link>
  );
};

export default Header;
