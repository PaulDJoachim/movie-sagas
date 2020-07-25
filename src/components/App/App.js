import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../Home/Home'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>this is the App.js</p>
        <main>
          <Router>
            <Link to='/'>Home</Link>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/details" component={Details} />
              <Route path="/edit" component={Edit} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
