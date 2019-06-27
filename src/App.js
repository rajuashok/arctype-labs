import React, { Component } from 'react';
import './App.scss';
import Firestore from "./Firestore";
import * as cx from 'classnames';

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
    const { title, icon, description, ready } = this.props;
    return (
      <div className="Feature-box">
        <div className="title">{title}</div>
        <div className="icon"><img src={icon}/></div>
        <div className="description">{description}</div>
        <button className={cx("feature-button", {"disabled": !ready})}>{ready ? "Get Started" : "Coming Soon"}</button>
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
      <div className="App-heading-wrapper">
        <div className="App-heading">
          Full-stack Machine Learning
        </div>
        <div className="App-subheading">
          Powerful tools and solutions for machine learning and data science
        </div>
      </div>
    )
  }

  renderFeatures = () => {
    const features = [
      {
        title: "Archtype SQL",
        description: "The next-generation SQL client built for collaboration",
        icon: "/sql-icon.svg",
        ready: true
      },
      {
        title: "Archtype Dataprep",
        description: "Intelligent visual data preparation and date cleaning",
        icon: "/dataprep-icon.svg",
        ready: false
      },
      {
        title: "Archtype Datasets",
        description: "Share and manage datasets across teams",
        icon: "/datasets-icon.svg",
        ready: false
      },
      {
        title: "Archtype ML",
        description: "No-code machine learning",
        icon: "/ml-icon.svg",
        ready: false
      },
    ]
    return (
      <div className="App-features">
        <div className="container">
          <div className="heading">
            Best-in-class tools for every step of your machine learning workflow
          </div>
          <div className="features">
            {features.map(f => <Feature title={f.title} icon={f.icon} description={f.description} ready={f.ready} />)}
          </div>
        </div>
        <div className="bg-gradient"/>
      </div>
    );
  }


  render() {
    return (
      <div>
        {this.renderTop()}
        <div className="App-hero-robot"/>
        {this.renderFeatures()}
      </div>);
  }
}

export default App;
