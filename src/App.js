import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Header from "./Header";
import Main from "./Main";
import UserDetails from "./UserDetails";
//import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Main path="/" />
          <UserDetails path="details/:userName" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
