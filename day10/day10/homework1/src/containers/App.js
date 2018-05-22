import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADDTODO, DELETETODO } from '../actions/todo';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const App = (props) => {
  console.log(props)
  return (
    <div>
      <Header onSave={props.ADDTODO} />
      <TodoList onDelete={props.DELETETODO} />
    </div>
  );
}
const mapStateToProps = (state) => ({ todos: state });
const mapDispathToProps = { ADDTODO, DELETETODO };
export default connect(mapStateToProps, mapDispathToProps)(App);
