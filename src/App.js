import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
