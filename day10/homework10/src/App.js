import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
import { Form, Modal, Button, Input, Icon, Badge } from "antd";
import Boxshow from './Boxshow';
class App extends Component {
  state = {
    flagpopup: false
  }
  handlesetpopup = status => {
    this.setState({ flagpopup: status === "show" ? true : false });
  };
  render() {
    return (
      <div className="App">
        <nav>
          <ul className="navbar">
            <li className="active">
              <a>KaiMaiDee</a>
            </li>
            <li className="navbar">

              <a
                onClick={() => this.handlesetpopup("show")}
                style={{ fontSize: 20 }}
              >
                <Badge count={1} />
                <Icon type="shopping-cart" />
                My Cart
              </a>
            </li>
          </ul>
        </nav>
        <div style={{ marginTop: 15 }}>
          <Modal
            title="Add new recipe"
            visible={this.state.flagpopup}
            // onOk={this.handlesetdata}
            onCancel={() => this.handlesetpopup("close")}
          >
            <div style={{ marginBottom: 16 }}>
              <Input
                addonBefore="Title:"
                name="title"
              // value={this.state.title}
              // onChange={this.handleChange}
              />
            </div>
            {/* {this.state.ingredients.map((item, idx) => (
              <div style={{ marginBottom: 16 }}>
                <Input
                  name={idx}
                  addonBefore={"Ingredients: " + (idx + 1)}
                  onChange={this.handleChangeArray}
                  value={this.state.ingredients[idx]}
                />
              </div>
            ))} */}
            <div style={{ marginBottom: 16, textAlign: "right" }}>
              {/* <Button type="primary" onClick={() => this.addtext()}>
                +
              </Button> */}
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input
                name="instructions"
                addonBefore="Instructions:"
              // value={this.state.instructions}
              // onChange={this.handleChange}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <Input
                name="URL"
                addonBefore="URL:"
              // value={this.state.URL}
              // onChange={this.handleChange}
              />
            </div>
          </Modal>
          Search:
          <Input
            placeholder="พิมพ์เพื่อค้นหา"
            // onChange={this.validation}
            style={{ width: 200 }}
          />
        </div>
        <Boxshow
        // datashow={
        //   this.state.flagsearch ? this.state.data : this.state.datasearch
        // }
        // func={this.dateledata}
        />
        <footer>
          <p style={{ paddingTop: 15 }}>this is footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
