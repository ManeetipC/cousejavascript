import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  funtionsalary() {
    fetch('homework1-4.json')
      .then(data => data.json())
      .then(item => {
        let arrtest = [];

        let aa = item.filter(e => e.gender == 'male' && e.friends.length >= 2)
        // console.log(aa)
        let arte = [];
        let [ssss] = aa.map((i, idx, array) => {
          let objss = {};
          for (let ss in i) {
            if (ss === 'name' || ss === 'gender' || ss === 'company' || ss === 'email' || ss === 'friends' || ss === 'balance') {
              objss[ss] = i[ss]
            }
          }

          arte.push(objss)
          // console.log(arte)
          return arte;
        })
        console.log(ssss)
      })
      .catch(err => console.log(err))

  }
  render() {
    return ( <
      div className = "App" >
      <
      header className = "App-header" >
      <
      img src = {
        logo
      }
      className = "App-logo"
      alt = "logo" / >
      <
      h1 className = "App-title" > Welcome to React < /h1> < /
      header > <
      p className = "App-intro"
      onClick = {
        this.funtionsalary
      } >
      To get started, edit < code > src / App.js < /code> and save to reload. < /
      p > <
      /div>
    );
  }
}

export default App;