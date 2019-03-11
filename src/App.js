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
        <div className="container">
          <h2>Zander React App</h2>
          <a href="/">Cake List</a><br/>
          <a href="/view/1">View Cake</a><br/>
          <a href="/review">Review Cake</a>
          <Route path="/" exact component={CakeList} />
          <Route path="/view/:id" exact component={ViewCake} />
          <Route path="/review" exact component={ReviewCake} />
        </div>
      </Router>

    );
  }
}

export default App;
