import React, { Component } from 'react';
import './Home.scss';
import App from './App';
import User from './User';
import Company from './Company';
import Survey from './Survey';
import ScrollToTop from 'react-router-scroll-top'
import { BrowserRouter as Router, Route } from "react-router-dom";
import MediaQuery from 'react-responsive';
import SiteNav, { ContentGroup } from 'react-site-nav';
import { MenuItem } from './Menu';
import { arctypeFeatures } from './constants';

class Header extends Component {
    render() {
        return (
          <div>
            <MediaQuery query="(min-width: 720px)">
              <header className="Header">
                <div>
                  <a href="/"><div className="Header-logo"/></a>
                </div>
                <SiteNav
                  align="right" /* center, left, right. This directly maps to justify-content of the root grid. */
                  // columnWidth="200"
                  rowHeight="23"
                  background="transparent"
                  color="#fff"
                  fontSize="17"
                  fontFamily="Nunito Sans"
                  fontWeight="bold"
                  // contentBackground="#fff" /* Applies to all content groups */
                  // contentColor="#323232" /* Applies to all content groups */
                  contentTop="7.88" /* Adjusts the distance between ContentGroups and root items */
                  // breakpoint="768" /* Show site nav at this breakpoint */
                  // debug={false} /* Keep ContentGroups open to make debugging easier */
                  >
                  <ContentGroup title="Product" width="470" height="502">
                    <div className="Menu">
                      {arctypeFeatures.map(f => <MenuItem title={f.title} description={f.description} icon={f.icon} disabled={f.disabled} />)}
                    </div>
                  </ContentGroup>
                  {/* <ContentGroup title="Solutions" />
                  <ContentGroup title="Sign in" /> */}
                </SiteNav>
                {/* <div className="Header-menu">
                  <a className="item" href="#">Solutions</a>
                  <a className="item" href="#">Sign in</a>
                </div> */}
              </header>
            </MediaQuery>
            <MediaQuery query="(max-width: 719px)">
              <header className="Header-mobile">
                <div>
                  <a href="/"><div className="Header-logo"/></a>
                </div>
                <div className="Header-hamburger"/>
              </header>
            </MediaQuery>
          </div>
        );
    }
}
 
class Footer extends Component {
    render() {
        return (
          <div>
            <MediaQuery query="(min-width: 412px)">
              <footer className="Footer">
                  <div className="Footer-copyright">
                      © Copyright 2019 Arctype
                  </div>
                  <div className="Footer-links">
                      <a className="Footer-link" href="#">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a className="Footer-link" href="#">Privacy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a className="Footer-link" href="#">Support</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a className="Footer-link" href="mailto:support@arctype.com">Contact</a>
                  </div>
              </footer>
            </MediaQuery>
            <MediaQuery query="(max-width: 411px)">
              <footer className="Footer-mobile">
                <div className="list">
                <a className="link" href="#">Terms</a>
                <a className="link" href="#">Privacy</a>
                <a className="link" href="#">Support</a>
                <a className="link" href="mailto:support@arctype.com">Contact</a>
                <div className="copyright">
                    © Copyright 2019 Arctype
                </div>
                </div>
              </footer>
            </MediaQuery>
          </div>
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