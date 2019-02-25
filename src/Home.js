import React, { Component } from 'react';
import App from './App';
import User from './User';
import Company from './Company';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/user" component={User} />
                    <Route path="/company" component={Company} />
                    {/* <Route path="/onboarding" component={Onboarding} /> */}
                </div>
            </Router>
        );
    }
}

export default Home;