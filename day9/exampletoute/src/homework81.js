import React, { Component } from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Form, Modal, Button, Input, Select, Spin } from "antd";
const Option = Select.Option;
class App extends Component {
  state = {
    data: [
    ]
    , list: [],
    name: 'USD',
    flagspin: true
  }
  componentDidMount() {

    this.setState({ flagspin: false })
    let dd = fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((resp) => resp.json())
      .then(data => {
        this.setState({ list: Object.keys(data.bpi) })
      })
      .then(() => {

        let dd = fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.props.match.params.name || 'USD'}`).then((resp) => resp.json())
          .then(data => {
            let datapush = []
            for (var key in data.bpi) {
              datapush.push({ day: key, price: data.bpi[key] })
            }
            this.setState({ data: datapush, flagspin: true })
          })
      })
  }

  handleChange = (value) => {
    this.setState({ flagspin: false })
    let dd = fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${value}`).then((resp) => resp.json())
      .then(data => {
        let datapush = []
        for (var key in data.bpi) {
          datapush.push({ day: key, price: data.bpi[key] })
        }
        this.setState({ data: datapush, name: value, flagspin: true })
      })
  };
  render() {
    return (
      <div className="App" style={{ margin: 150 }}>
        <Select defaultValue={this.props.match.params.name || 'USD'} style={{ width: 120 }} onChange={this.handleChange}>
          {this.state.list.map((data) => {
            return (<Option value={data}>{data}</Option>)
          })}
        </Select>
        <br />
        <br />
        {
          this.state.flagspin ? <LineChart width={730} height={250} data={this.state.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" name={`${this.props.match.params.name || 'USD'}`} dataKey="price" stroke="#8884d8" />
          </LineChart> : <Spin tip="Loading..." />
        }


      </div>
    );
  }
}

export default App;
