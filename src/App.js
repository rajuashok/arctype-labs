import React, { Component } from 'react';
import './App.scss';
import Firestore from "./Firestore";

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

class App extends Component {
  onSubmitEmail = () => {
    this.props.history.push('/signup');
  }

  render() {
    return (
      <div className="App">
        <section className="App-title">
          <div className="section-inner">
            <h1>A new and better way to hop on a call with your team</h1>
            <div className="App-title-subtitle">
              <h2>Fast, reliable and simple voice chat for teams — Create your own voice channels and organize them by team, project or whatever you’d like</h2>
            </div>
            <GetStarted onSubmitEmail={this.onSubmitEmail}/>
          </div>
        </section>
        <section className="App-image">
          <div className="App-product-image">
            <img src="/switch-product.png"/>
          </div>
        </section>
        <section className="App-benefits">
          <h2>Perfect for distributed teams</h2>
          <div className="App-benefits-inner">
          <Benefits icon="icon1" title="Powerful search" description="Search for customer feedback from social media, email, live support chat and more, in a single place" />
          <Benefits icon="icon2" title="Focus on building" description="Spend less time aggregating and analyzing data and spend more time building" />
          <Benefits icon="icon3" title="Shared understanding" description="Share, discuss and analyze customer feedback with your entire team" />
          </div>
        </section>
        <section className="App-how-it-works App-benefits">
          <h2>How it Works</h2>
          <div className="App-benefits-inner">
            <Benefits title="1. Connect apps" description="Select the services (e.g. Twitter, App Store, Intercom, etc.) you want to start pulling from" />
            <Benefits title="2. Access feedback" description="All your customer feedback will be accessable and searchable directly from AutoPilot" />
            <Benefits title="3. Share with your team" description="Start a discussion with your team, share customer feedback via a link or send to JIRA." />
          </div>
        </section>
        <section className="App-bottom-signup">
          <div className="section-inner">
            {/* TODO(super-abs) */}
            <h2>Try [INSERT APP NAME] with your team</h2>
            <GetStarted onSubmitEmail={this.onSubmitEmail}/>
          </div>
        </section>
      </div>

    );
  }
}

export default App;
