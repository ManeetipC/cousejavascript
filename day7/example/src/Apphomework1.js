import React, { Component } from "react";
import "./App.css";

class Card extends Component {
  handleClick = color => {
    // console.log(color);
    alert(color);
  };
  render() {
    let ramdomcolor = this.props.color[
      Math.floor(Math.random() * this.props.color.length)
    ];
    let style = {};
    return (
      <div>
        {this.props.color.map(color => (
          // console.log(color)
          <div
            style={{
              backgroundColor: color,
              width: 250,
              height: 250,
              textAlign: "center",
              float: "left"
            }}
            onClick={() => this.handleClick(color)}
          >
            {color}
          </div>
        ))}
      </div>
    );
  }
}

class App extends Component {
  state = {
    color: ["red", "blue", "green", "purple", "pink"]
  };
  componentDidMount() {
    this.setState({
      color: [...this.shuffleCards([...this.state.color, ...this.state.color])]
    });
  }

  shuffleCards(array) {
    var i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  handleClick = () => {
    this.setState({
      color: this.shuffleCards(this.state.color)
    });
  };
  render() {
    // console.log(this.state.color);
    return (
      <div className="App">
        <Card color={this.state.color} />
        <br />
        <input type="submit" onClick={this.handleClick} value="new deck" />
      </div>
    );
  }
}

export default App;
