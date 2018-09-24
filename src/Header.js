import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="app-header">
      <img className="logo" src={logo} alt="Github Profile Display Logo" />
      <h1 className="title">Github Profiles</h1>
    </div>
  );
};

export default Header;
