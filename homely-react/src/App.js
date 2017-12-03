import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ExpensesContainer from './components/ExpensesContainer'
class App extends Component {
  render() {
    return (

      <MuiThemeProvider>  
      <AppBar
      title="Homely"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />      
        <ExpensesContainer /> 
      </MuiThemeProvider>
    );
  }
}

export default App;
