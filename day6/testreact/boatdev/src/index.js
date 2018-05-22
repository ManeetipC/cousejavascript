import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import App from "./Apptest";
import registerServiceWorker from "./registerServiceWorker";

// let Test = () => <div>asdasd</div>;

// class Test2 extends React.Component {
//   render() {
//     return <div>asdasddwww</div>;
//   }
// }

// let num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// let Tenbox = () =>
//   num.map(() => {
//     return <App />;
//   });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
