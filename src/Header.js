import React from "react";
import logo from "../public/logo.png";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className="app-header">
      <Link to="/">
        <img className="logo" src={logo} alt="Github Profile Display Logo" />
        <h1 className="title">Github Profiles</h1>
      </Link>
    </div>
  );
};

export default Header;
