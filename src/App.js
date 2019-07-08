import React, { Component } from 'react';
import './App.scss';
import Firestore from "./Firestore";
import * as cx from 'classnames';
import MediaQuery from 'react-responsive';
import { arctypeFeatures } from './constants';
import ExpandCollapse from 'react-expand-collapse';

class Benefits extends Component {
  render() {
    return (
      <div className="App-benefit">
        {this.props.icon && <img className="App-benefit-icon" src={`/${this.props.icon}.png`} width="50" height="50" />}
        <div className="App-benefit-title">{this.props.title}</div>
        <div className="App-benefit-description">{this.props.description}</div>
      </div>
    );
  }
}

class GetStarted extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }
  
  updateInput = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  submitEmail = e => {
    e.preventDefault();
    const db = Firestore.firestore();
    db.collection("users").doc(this.state.email).set({
      email: this.state.email
    }, {merge: true});

    this.props.onSubmitEmail();

    localStorage.setItem('se', this.state.email);
    this.setState({
      email: ""
    });
  }
  
  render() {
    return (
      <div className="App-get-started">
        <form onSubmit={this.submitEmail}>
          <input
            className="App-email-input large-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email} />
            <button type="submit" className="App-start-btn button large-button">Get Started</button>
        </form>
      </div>
    );
  }
}


class Feature extends Component {
  render() {
    const { title, icon, description, disabled } = this.props;
    return (
      <div className="Feature-box">
        <div className="icon"><img src={icon}/></div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        {/*<button className={cx("feature-button", {"disabled": disabled})}>{!disabled ? "Get Started" : "Coming Soon"}</button>*/}
      </div>
    );
  }
}

class App extends Component {
  state = { open: false };

  onSubmitEmail = () => {
    this.props.history.push('/signup');
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });}


  renderTop = () => {
    return (
      <div>
        <MediaQuery query="(min-width: 720px)">
          <div className="App-heading-wrapper">
            <div className="heading-container">
            <div className="icon"><img src="/arctype-labs.png" /></div>
              <div className="App-heading">
                Machine Learning Consulting
              </div>
              <div className="App-subheading">
                Helping you solve business problems using machine learning and AI
              </div>
              <div className="Header-button">
                TELL US ABOUT YOUR PROJECT
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 719px)">
          <div className="App-head-mobile-wrapper">
            <div className="head-mobile-container">
              <div className="icon"><img src="/arctype-labs.png" /></div>
              <div className="heading">
                Machine Learning Consulting
              </div>
              <div className="subheading">
                Helping you solve business problems using machine learning and AI
              </div>
              {/*<div className="Header-button">
                TELL US ABOUT YOUR PROJECT
              </div>*/}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }

  renderFeatures = () => {
    return (
      <div>
        <MediaQuery query="(min-width: 720px)">
          <div className="App-features">
            <div className="container-features">
              <div className="heading">
                How Can We Help
              </div>
              <div className="features">
                {arctypeFeatures.map(f => <Feature icon={f.icon} title={f.title}  description={f.description} disabled={f.disabled} />)}
              </div>
            </div>
            {/* <div className="bg-gradient"/> */}
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 719px)">
          <div className="App-features">
            <div className="container-features">
              <div className="heading">
                How Can We Help
              </div>
              <div className="features">
                {arctypeFeatures.map(f => <Feature title={f.title} icon={f.icon} description={f.description} disabled={f.disabled} />)}
              </div>
            </div>
            {/* <div className="bg-gradient"/> */}
          </div>
        </MediaQuery>
      </div>
    );
  }

  renderBottomBox = () => {
    return (
      <>
        <MediaQuery query="(min-width: 1130px)">
          <div className="Learn-box-container">
            <div className="Learn-box">
              <div className="Learn-heading">Have a project in mind?</div>
              <div className="Learn-cta">
                {/*<div className="logo-text">
                  <div><img src="/logo-labs.svg"/></div>
                  <div className="text">Machine learning consulting</div>
                </div>*/}
                <div className="Learn-button-email">
                  <img src="/email-icon.png" /> SEND US AN EMAIL
                </div>
                <div className="Learn-button">
                <img src="/phone-icon.png" /> SCHEDULE A FREE CALL
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1129px)">
          <div className="Learn-box-container-mobile">
            <div className="Learn-box">
              <div className="Learn-heading">Have a project in mind?</div>
              {/*<div><img src="/logo-labs-mobile.svg"/></div>
              <div className="text">Machine learning consulting</div>*/}
              <div className="Learn-button-email">
                <img src="/email-icon.png" /> SEND US AN EMAIL
              </div>
              <div className="Learn-button">
                <img src="/phone-icon.png" /> SCHEDULE A FREE CALL
              </div>
            </div>
          </div>
        </MediaQuery>
      </>
    )
  }

  renderCustomSolutions = () => {
    return (
      <div>
        <MediaQuery query="(min-width: 720px)">
          <div className="Custom-solutions">
            <div className="container-features">
              <div className="heading">
                Custom Solutions for Enterprises and Startups
              </div>
              <div className="row">
                <div className="col nlp"><p className="solutions-title">Natural Language Processing</p></div>
                <div className="col computer-vision"><p className="solutions-title">Computer Vision</p></div>
                <div className="col churn-prediction"><p className="solutions-title">Churn Prediction</p></div>
                <div className="col predictive-analytics"><p className="solutions-title">Predictive Analytics</p></div>
              </div>
              <div className="row">
                <div className="col sentiments-analysis"><p className="solutions-title">Sentiments Analysis</p></div>
                <div className="col sales-forecasting"><p className="solutions-title">Sales Forecasting</p></div>
                <div className="col trading-signals"><p className="solutions-title">Trading Signals</p></div>
                <div className="col supply-chain-optimization"><p className="solutions-title">Supply-chain Optimization</p></div>
              </div>
              <div className="row">
                <div className="col recommendation-systems"><p className="solutions-title">Recommendation Systems</p></div>
                <div className="col graph-classification"><p className="solutions-title">Graph Classification</p></div>
                <div className="col hyperparameter-optimization"><p className="solutions-title">Hyperparameter Optimization</p></div>
                <div className="col model-compression"><p className="solutions-title">Model Compressions</p></div>
              </div>
              <div className="Applications-button">Do you have an application that's not listed above? <a href="#">&nbsp; Let us know</a> </div>
            </div>
            {/* <div className="bg-gradient"/> */}
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 719px)">
          <div className="Custom-solutions">
            <div className="container-features">
              <div className="heading">
              Custom Solutions for Enterprises and Startups
              </div>
              {/*<div className="features">
                {arctypeFeatures.map(f => <Feature title={f.title} icon={f.icon} description={f.description} disabled={f.disabled} />)}
              </div>*/}
              <div>
                <div className="col nlp"><p className="solutions-title">Natural Language Processing</p></div>
                <div className="col computer-vision"><p className="solutions-title">Computer Vision</p></div>
                <div className="col recommendation-systems" onClick={this.toggle.bind(this)}><p className="solutions-title">And Many More</p></div>
                <div className={"collapse" + (this.state.open ? ' in' : '')}>
                  <div>
                <div className="col churn-prediction"><p className="solutions-title">Churn Prediction</p></div>
                <div className="col predictive-analytics"><p className="solutions-title">Predictive Analytics</p></div>
            
                <div className="col sentiments-analysis"><p className="solutions-title">Sentiments Analysis</p></div>
                <div className="col sales-forecasting"><p className="solutions-title">Sales Forecasting</p></div>
                <div className="col trading-signals"><p className="solutions-title">Trading Signals</p></div>
                <div className="col supply-chain-optimization"><p className="solutions-title">Supply-chain Optimization</p></div>

                <div className="col recommendation-systems"><p className="solutions-title">Recommendation Systems</p></div>
                <div className="col graph-classification"><p className="solutions-title">Graph Classification</p></div>
                <div className="col hyperparameter-optimization"><p className="solutions-title">Hyperparameter Optimization</p></div>
                <div className="col model-compression"><p className="solutions-title">Model Compressions</p></div>
                </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-gradient"/> */}
          </div>
        </MediaQuery>
      </div>
    );
  }

  renderFormBox = () => {
    return (
      <>
        <MediaQuery query="(min-width: 1130px)">
          <div className="Tell-us-about-box-container">
            <div className="Tell-us-about-box">
              <div className="Tell-us-about-heading">Tell Us About Your Project</div>
              <div className="Tell-us-about-cta">
                {/*<div className="logo-text">
                  <div><img src="/logo-labs.svg"/></div>
                  <div className="text">Machine learning consulting</div>
                </div>*/}
                <div>
                <div className="Learn-button">
                  <img src="/phone-icon.png" /> SCHEDULE A FREE CALL
                </div>
              </div>
              <span className="form-text">Or</span>
              <form>
                <input className="email-input" type="text" placeholder= "Email"></input><br />
                <input className="project-input" type="text" placeholder="Describe your project"></input>
              </form>
              <div>
                <div className="Learn-button-email">
                  <img src="/email-icon.png" /> SEND US AN EMAIL
                </div>
              </div>
              <span className="form-text">Or <strong>Click Here</strong> to email us directly</span>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1129px)">
          <div className="Tell-us-about-box-container-mobile">
            <div className="Tell-us-about-box">
              <div className="Tell-us-about-heading">Tell Us About Your Project</div>
              <div className="Tell-us-about-cta">
              {/*<div><img src="/logo-labs-mobile.svg"/></div>
              <div className="text">Machine learning consulting</div>*/}
              <div className="Learn-button">
                <img src="/phone-icon.png" /> SCHEDULE A FREE CALL
              </div>
              </div>
              <span className="form-text">Or</span>
              <form>
                <input className="email-input" type="text" placeholder= "Email"></input><br />
                <input className="project-input" type="text" placeholder="Describe your project"></input>
              </form>
              <div className="Tell-us-about-cta">
                <div className="Learn-button-email">
                  <img src="/email-icon.png" /> SEND US AN EMAIL
                </div>
              </div>
              <span className="form-text">Or <strong>Click Here</strong> to email us directly</span>
            </div>
          </div>
        </MediaQuery>
      </>
    )
  }


  render() {
    return (
      <div>
        {this.renderTop()}
        {/*<div className="App-hero-robot"/>*/}
        <div className="Hero-robot-weights" />
        {this.renderFeatures()}
        {this.renderBottomBox()}
        {this.renderCustomSolutions()}
        {this.renderFormBox()}
      </div>);
  }
}

export default App;
