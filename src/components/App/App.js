import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home'
import Details from '../Details/Details'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Home />
        <Router>
          <Route exact path="/" Component={Home} />
          <Route exact path="/detalis" Component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
