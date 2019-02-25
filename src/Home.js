import React, { Component } from 'react';
import App from './App';
import User from './User';
import Company from './Company';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                <ul> 
                    <li>
                    <Link to="/">App</Link>
                    </li>
                    <li>
                    <Link to="/get-started">Get Started</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={App} />
                <Route path="/get-started" component={GetStarted} />
                <Route path="/user" component={User} />
                <Route path="/company" component={Company} />
                </div>
            </Router>
        );
    }
}

const GetStarted = () => (
    <div>
      <h2>Get Started</h2>
    </div>
  );  

export default Home;