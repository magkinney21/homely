import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ExpensesContainer from './components/ExpensesContainer';
import Splash from './components/Splash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>  
      <Router>
      <div>
      <AppBar
      title="Homely"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{background:'black'}}
    />

      <Route exact path="/" component={Splash}/>
      <Route path="/expenses" component={ExpensesContainer}/>
      </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
