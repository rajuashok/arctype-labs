import React, { Component } from 'react';
import './Home.scss';
import App from './App';
import User from './User';
import Company from './Company';
import Survey from './Survey';
import ScrollToTop from 'react-router-scroll-top'
import { BrowserRouter as Router, Route } from "react-router-dom";

class Header extends Component {
    render() {
        return (
          <header className="Header">
            <div>
              <a href="/"><div className="Header-logo"/></a>
            </div>
            <div className="Header-menu">
              <a className="item" href="#">Products</a>
              <a className="item" href="#">Solutions</a>
              <a className="item" href="#">Sign In</a>
            </div>
          </header>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Footer-copyright">
                    {/* TODO(super-abs) */}
                    © Copyright 2019 Arctype
                </div>
                <div className="Footer-links">
                    <a className="Footer-link" href="#">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="Footer-link" href="#">Privacy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="Footer-link" href="#">Support</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="Footer-link" href="mailto:support@arctype.com">Contact</a>
                </div>
            </footer>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                <div className="Home-wrapper">
                    <Header />
                    <div className="Home-inner">
                        <Route exact path="/" component={App} />
                        <Route path="/signup" component={User} />
                        <Route path="/company" component={Company} />
                        <Route path="/onboarding" component={Survey} />
                        {/* <Route path="/onboarding" component={Onboarding} /> */}
                    </div>
                    <Footer/>
                </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default Home;