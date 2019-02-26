import React, { Component } from 'react';
import './Home.scss';
import App from './App';
import User from './User';
import Company from './Company';
import Survey from './Survey';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Header-logo"/>
            </header>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Footer-copyright">
                    © 2019 Freebird, inc. All Rights Reserverd.
                </div>
                <div className="Footer-links">
                    <a href="#">Terms of use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Service agreement</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Privacy policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="mailto:support@superabstractions.com">Contact us</a>
                </div>
            </footer>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={App} />
                    <Route path="/user" component={User} />
                    <Route path="/company" component={Company} />
                    <Route path="/oops" component={Survey} />
                    {/* <Route path="/onboarding" component={Onboarding} /> */}
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default Home;