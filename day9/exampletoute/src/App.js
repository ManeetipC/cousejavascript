import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Form, Modal, Button, Input, Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="abount"> <Link to="/abount">Abount</Link>
              </Menu.Item>
              <Menu.Item key="job"><Link to="/job">Job</Link>
              </Menu.Item>
              <Menu.Item key="portfolito"><Link to="/portfolito">Portfolito</Link>
              </Menu.Item>
              <Menu.Item key="skill"><Link to="/skill">Skill</Link>
              </Menu.Item>
            </Menu>
            <Route exact path="/" component={() => (<h3>select Menu</h3>)} />
            <Route path="/abount" component={() => (<h3>My name is itthi. i'm a nippon sysits company</h3>)} />
            <Route path="/job" component={() => (<h3>Programmer</h3>)} />
            <Route path="/portfolito" component={() => (<h3>Project c# </h3>)} />
            <Route path="/skill" component={() => (<h3><li>javascript</li><li>vb.net</li><li>android studio</li></h3>)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
