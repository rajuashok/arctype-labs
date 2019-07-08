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
import { MenuItem, MobileMenu } from './Menu';
import { arctypeFeatures } from './constants';

class Header extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        const { onMenuClicked } = this.props;
        return (
          <div>
            <MediaQuery query="(min-width: 900px)">
              <header className="Header">
                <div className="Header-items">
                  <div>
                    <a href="/"><div className="Header-logo"/></a>
                  </div>
                  <div className="menu-wrapper">
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
                      {/*<ContentGroup title="Product" width="470" height="502">
                        <div className="Menu">
                          {arctypeFeatures.map(f => <MenuItem title={f.title} description={f.description} icon={f.icon} disabled={f.disabled} />)}
                        </div>
                      </ContentGroup>
                      {/* <ContentGroup title="Solutions" />
                      <ContentGroup title="Sign in" /> */}
                    </SiteNav>
                    <a className="menu-item" href="#">Product</a>
                    <a className="menu-item" href="#">Solutions</a>
                    <a className="menu-item" href="#">Sign in</a>
                    {/* <div className="Header-menu">
                    </div> */}
                  </div>
                </div>
              </header>
            </MediaQuery>
            <MediaQuery query="(max-width: 899px)">
              <header className="Header-mobile">
                <div>
                  <a href="/"><div className="Header-logo"/></a>
                </div>
                <div onClick={() => {
                  if (onMenuClicked) onMenuClicked();
                }} className="Header-hamburger"/>
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
                      <a className="link" href="#">Terms</a>
                      <a className="link" href="#">Privacy</a>
                      <a className="link" href="#">Support</a>
                      <a className="link" href="mailto:support@arctype.com">Contact</a>
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
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false
    };
  }

  updateBodyScroll() {
    const home = document.querySelector("#home");
    if (this.state.mobileMenuOpen) {
      if (home) {
        home.style.overflow = "hidden";
        home.style.height = "100%";
      }
    } else {
      if (home) {
        home.style.overflow = "hidden";
        home.style.height = "auto";
      }
    }
  }

  render() {
      this.updateBodyScroll();
      return (
          <Router>
              <ScrollToTop>
              <div className="Home-wrapper" id="home">
                  <Header onMenuClicked={() => {this.setState({ mobileMenuOpen: true })}} />
                  {this.state.mobileMenuOpen && <MobileMenu onMenuClosed={() => {this.setState({mobileMenuOpen: false})}} />}
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