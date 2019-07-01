import React, { Component } from 'react';
import './App.scss';
import Firestore from "./Firestore";
import * as cx from 'classnames';
import MediaQuery from 'react-responsive';
import { arctypeFeatures } from './constants';

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
        <div className="title">{title}</div>
        <div className="icon"><img src={icon}/></div>
        <div className="description">{description}</div>
        <button className={cx("feature-button", {"disabled": disabled})}>{!disabled ? "Get Started" : "Coming Soon"}</button>
      </div>
    );
  }
}

class App extends Component {
  onSubmitEmail = () => {
    this.props.history.push('/signup');
  }

  renderTop = () => {
    return (
      <div>
        <MediaQuery query="(min-width: 720px)">
          <div className="App-heading-wrapper">
            <div className="heading-container">
              <div className="App-heading">
                Full-stack Machine Learning
              </div>
              <div className="App-subheading">
                Powerful tools and solutions for machine learning and data science
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 719px)">
          <div className="App-head-mobile-wrapper">
            <div className="head-mobile-container">
              <div className="heading">
                Full-stack Machine Learning
              </div>
              <div className="subheading">
                Powerful tools for machine learning and data science
              </div>
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
                Best-in-class tools for every step of your machine learning workflow
              </div>
              <div className="features">
                {arctypeFeatures.map(f => <Feature title={f.title} icon={f.icon} description={f.description} disabled={f.disabled} />)}
              </div>
            </div>
            <div className="bg-gradient"/>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 719px)">
          <div className="App-features">
            <div className="container-features">
              <div className="heading">
                Best-in-class tools for your workflow
              </div>
              <div className="features">
                {arctypeFeatures.map(f => <Feature title={f.title} icon={f.icon} description={f.description} disabled={f.disabled} />)}
              </div>
            </div>
            <div className="bg-gradient"/>
          </div>
        </MediaQuery>
      </div>
    );
  }

  renderBottomBox = () => {
    return (
      <div className="Learn-box-container">
        <div className="Learn-box">
          <div className="Learn-heading">Have a machine learning project in mind? We can help!</div>
          <div className="Learn-cta">
            <div className="logo-text">
              <div><img src="/logo-labs.svg"/></div>
              <div className="text">Machine learning consulting</div>
            </div>
            <div className="Learn-button">
              Learn more about our solutions
            </div>
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div>
        {this.renderTop()}
        <div className="App-hero-robot"/>
        {this.renderFeatures()}
        {this.renderBottomBox()}
      </div>);
  }
}

export default App;
