import React, { Component } from "react";
import "./App.css";
import { Form, Modal, Button, Input } from "antd";

class Boxshow extends Component {
  render() {
    let styletxthead = { fontSize: 20, fontWeight: "bold", textAlign: "left" };
    let styletxtbody = {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "left",
      marginTop: 20
    };
    return (
      <div>
        {this.props.datashow.map(data => (
          <div className="card" key={data.id}>
            <div>
              <Button type="primary" onClick={() => this.props.func(data.id)}>
                delete
              </Button>
            </div>
            <img
              src={data.url}
              alt="Avatar"
              style={{ width: "100%", marginTop: 10 }}
            />
            <div className="container">
              <div style={styletxthead}>{data.title}</div>
              <div style={styletxtbody}>Ingredients:</div>
              <ul className="detail">
                {data.ingredients.map(item => (
                  <li className="detail">{item}</li>
                ))}
              </ul>
              <div style={styletxtbody}>Instructions:</div>
              <div>{data.instructions}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class Adddata extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: 400,
            display: "table",
            margin: "0 auto"
          }}
        >
          <span style={{ textAlign: "left" }}>M</span>
          <span
            onClick={() => this.props.func("close")}
            style={{ textAlign: "right" }}
          >
            x
          </span>
        </div>
      </div>
    );
  }
}

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "Spaghetti",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        instructions:
          "Open jar of Span sauce. Bring to simmer Boil water. Cool pasta until done. Combine pasta and sauce",
        url: "https://img.kapook.com/u/surauch/cook/Easy01.jpg"
      },
      {
        id: 2,
        title: "Milkshake",
        ingredients: ["2 Scoop Ice cream", "8 ounces milk"],
        instructions: "Combine ice cream and milk Blend until cremy",
        url: "https://img.kapook.com/u/surauch/cook/Easy03-1.jpg"
      },
      {
        id: 3,
        title: "Avocado Toast",
        ingredients: [
          "2 slices of bread",
          "1 avocadoo",
          "1 tablespoon olive oil",
          "1 pinch of salt",
          "pepper"
        ],
        instructions:
          "Toast bread. Slice avocado and spread on bread Add salt oil and pepper to taste.",
        url: "https://img.kapook.com/u/surauch/cook/Easy02-2.jpg"
      }
    ],
    datasearch: [],
    flagsearch: true,
    flagpopup: false,
    title: "",
    instructions: "",
    ingredients: [""],
    URL: ""
  };
  handlesetdata = () => {
    try {
      if (this.state.title === "") {
        throw Error("กรุณากรอก Title")
      }
      if (this.state.ingredients[0] === "") {
        throw Error("กรุณากรอก ingredients")
      }
      if (this.state.instructions === "") {
        throw Error("กรุณากรอก Instructions")
      }
      if (this.state.URL === "") {
        throw Error("กรุณากรอก URL")
      }
      let dataadd = {
        id: (this.state.data.length + 1),
        title: this.state.title,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
        url: this.state.URL
      }
      this.setState({
        data: [...this.state.data, dataadd], flagpopup: false, title: "",
        instructions: "",
        ingredients: [""],
        URL: ""
        , flagsearch: true
      });
    }
    catch (ex) {
      alert(ex.message)
    }

  }

  validation = e => {
    let data = this.state.data.filter(item => {
      let key = new RegExp(e.target.value, "i");
      return key.test(item.title);
    });
    this.setState({ datasearch: data, flagsearch: false });
  };
  handlesetpopup = status => {
    this.setState({ flagpopup: status === "show" ? true : false });
  };
  dateledata = id => {
    this.setState({
      data: this.state.data.filter(data => data.id !== id),
      flagsearch: true
    });
  };
  addtext = () => {
    this.setState({ ingredients: [...this.state.ingredients, ""] });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChangeArray = e => {
    const { value, name } = e.target
    this.setState({
      ingredients: this.state.ingredients.map((item, idx) => {
        return idx === Number(name) ? value : item
      })
    })
  };
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
          <ul className="navbar">
            <li className="active">
              <a href="#home">Recipe App</a>
            </li>
            <li className="navbar">
              <a href="#about">Contact Us</a>
            </li>
            <li className="navbar">
              <a href="#contact">About</a>
            </li>
            <li className="navbar">
              <a href="#news">Home</a>
            </li>
            <li className="navbar">
              <a
                className="active"
                href="#home"
                onClick={() => this.handlesetpopup("show")}
              >
                New Recipe
              </a>
            </li>
          </ul>
        </nav>
        <div style={{ marginTop: 15 }}>
          <Modal
            title="Add new recipe"
            visible={this.state.flagpopup}
            onOk={this.handlesetdata}
            onCancel={() => this.handlesetpopup("close")}
          >
            <div style={{ marginBottom: 16 }}>
              <Input
                addonBefore="Title:"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            {this.state.ingredients.map((item, idx) => (
              <div style={{ marginBottom: 16 }}>
                <Input
                  name={idx}
                  addonBefore={"Ingredients: " + (idx + 1)}
                  onChange={this.handleChangeArray}
                  value={this.state.ingredients[idx]}
                />
              </div>
            ))}
            <div style={{ marginBottom: 16, textAlign: "right" }}>
              <Button type="primary" onClick={() => this.addtext()}>
                +
              </Button>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input
                name="instructions"
                addonBefore="Instructions:"
                value={this.state.instructions}
                onChange={this.handleChange}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <Input
                name="URL"
                addonBefore="URL:"
                value={this.state.URL}
                onChange={this.handleChange}
              />
            </div>
          </Modal>
          Search:
          <Input
            placeholder="พิมพ์เพื่อค้นหา"
            onChange={this.validation}
            style={{ width: 200 }}
          />
        </div>
        <Boxshow
          datashow={
            this.state.flagsearch ? this.state.data : this.state.datasearch
          }
          func={this.dateledata}
        />
        <footer>
          <p style={{ paddingTop: 15 }}>this is footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
