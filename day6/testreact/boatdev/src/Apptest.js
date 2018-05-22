import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class App extends Component {
  render() {
    let styletxthead = { fontSize: 20, fontWeight: "bold", textAlign: "left" };
    let styletxtbody = {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "left",
      marginTop: 20
    };
    return (
      <div className="App">
        <nav>
          <ul class="navbar">
            <li className="active">
              <a href="#home">Recipe App</a>
            </li>
            <li class="navbar">
              <a className="active" href="#home">
                New Recipe
              </a>
            </li>
            <li class="navbar">
              <a href="#news">Home</a>
            </li>
            <li class="navbar">
              <a href="#contact">About</a>
            </li>
            <li class="navbar">
              <a href="#about">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div style={{ marginTop: 15 }}>
          Search:
          <input type="text" />
        </div>

        <div className="card">
          <img
            src="https://img.kapook.com/u/surauch/cook/Easy01.jpg"
            alt="Avatar"
            style={{ width: "100%", marginTop: 10 }}
          />
          <div className="container">
            <div style={styletxthead}>Spaghetti</div>
            <div style={styletxtbody}>Ingredients:</div>
            <ul class="detail">
              <li class="detail">pasta</li>
              <li class="detail">8 cups water</li>
              <li class="detail">1 box spaghetti</li>
            </ul>
            <div style={styletxtbody}>Instructions:</div>
            <div>
              Open jar of Span sauce. Bring to simmer Boil water. Cool pasta
              until done. Combine pasta and sauce
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://img.kapook.com/u/surauch/cook/Easy03-1.jpg"
            alt="Avatar"
            style={{ width: "100%", marginTop: 10 }}
          />
          <div className="container">
            <div style={styletxthead}>Milkshake</div>
            <div style={styletxtbody}>Ingredients:</div>
            <ul class="detail">
              <li class="detail">2 Scoop Ice cream</li>
              <li class="detail">8 ounces milk</li>
            </ul>
            <div style={styletxtbody}>Instructions:</div>
            <div>Combine ice cream and milk Blend until cremy</div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://img.kapook.com/u/surauch/cook/Easy02-2.jpg"
            alt="Avatar"
            style={{ width: "100%", marginTop: 10 }}
          />
          <div className="container">
            <div style={styletxthead}>Avocado Toast</div>
            <div style={styletxtbody}>Ingredients:</div>
            <ul class="detail">
              <li class="detail">2 slices of bread</li>
              <li class="detail">1 avocadoo</li>
              <li class="detail">1 tablespoon olive oil</li>
              <li class="detail">1 pinch of salt</li>
              <li class="detail">pepper</li>
            </ul>
            <div style={styletxtbody}>Instructions:</div>
            <div>
              Toast bread. Slice avocado and spread on bread Add salt oil and
              pepper to taste.
            </div>
          </div>
        </div>

        <footer>
          <p style={{ paddingTop: 15 }}>this is footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
