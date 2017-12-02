import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpensesContainer from './components/ExpensesContainer'
class App extends Component {
  render() {
    return (
      <div>
        <ExpensesContainer /> 
      </div>
    );
  }
}

export default App;
