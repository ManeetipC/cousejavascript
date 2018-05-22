import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let color = ["red", "blue", "green", "purple", "pink"];

    let styleramdom = {
      backgroundColor: ramdomcolor,
      width: 200,
      height: 200,
      textAlign: "center"
    };
    let num = Math.floor(Math.random() * (40 - 20 + 1) + 20);
    let ramdomsize = { fontSize: num };
    return (
      <div className="App">
        <div style={styleramdom}>
          <p style={ramdomsize}>asd</p>
        </div>
      </div>
    );
  }
}

export default App;
