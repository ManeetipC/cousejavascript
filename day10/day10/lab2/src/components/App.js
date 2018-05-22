import React from 'react';
import './App.css';
import CounterContainer from '../containers/CounterContainer';
import ButtonContainer from '../containers/ButtonContainer';
import ButtonContainer2 from '../containers/ButtonContainerde'

const App = () => (
  <div className="App">
    <CounterContainer />
    <ButtonContainer />
    <ButtonContainer2 />
  </div>
);

export default App;
