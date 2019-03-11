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
          <Link to="/">Cake List</Link><br/>
          <Link to="/view/1">View Cake</Link><br/>
          <Link to="/review">Review Cake</Link>
          <Route path="/" exact component={CakeList} />
          <Route path="/view/:id" exact component={ViewCake} />
          <Route path="/review" exact component={ReviewCake} />
        </div>
      </Router>
    );
  }
}

export default App;
