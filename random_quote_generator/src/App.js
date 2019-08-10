import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/quote";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Random Quote Generator</h1>
        <Quote />
      </React.Fragment>
    );
  }
}

export default App;
