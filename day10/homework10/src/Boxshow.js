import React, { Component } from "react";
import "./App.css";
import { Button } from "antd";

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
                {/* {this.props.datashow.map(data => (
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
                ))} */}
            </div>
        );
    }
}
export default Boxshow;