import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Menu } from "antd";
import Homework71 from './homework71';
import Homework72 from './homework72';
import Homework81 from './homework81';

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
                            <Menu.Item key="day7-1"> <Link to="/day7-1">Day 7 #1</Link>
                            </Menu.Item>
                            <Menu.Item key="day7-2"> <Link to="/day7-2">Day 7 #2</Link>
                            </Menu.Item>
                            <Menu.Item key="day8-1"> <Link to="/day8-1">Day 8 #1</Link>
                            </Menu.Item>
                        </Menu>
                        <Route exact path="/" component={() => (<h3>select Homework</h3>)} />
                        <Route path="/day7-1" component={Homework71} />
                        <Route path="/day7-2" component={Homework72} />
                        <Route path="/day8-1/:name?" component={Homework81} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
