import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CakeList from "./components/cake-list.component";
import ViewCake from "./components/view-cake.component";
import ReviewCake from "./components/review-cake.component";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              <img src="/img/cake.svg" width="30" height="30" className="d-inline-block align-top" alt="Cake App"/>
              Cake App
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/review" className="nav-link">Review Cakes</Link>
                </li>
              </ul>
            </div>
          </nav>

          <h2>Zander React App</h2>

          <Route path="/" exact component={CakeList} />
          <Route path="/view/:id" exact component={ViewCake} />
          <Route path="/review" exact component={ReviewCake} />
        </div>
      </Router>
    );
  }
}

export default App;
