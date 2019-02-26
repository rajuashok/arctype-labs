import React, { Component } from 'react';
import './App.scss';
import Firestore from "./Firestore";

class Benefits extends Component {
  render() {
    return (
      <div className="App-benefit">
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
            <button type="submit" className="button large-button">Get Started</button>
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
            <h1>A new and better way to communicate with your distributed team</h1>
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
            <Benefits title="Feel connected" description="Quickly jump into a voice channel anytime and start talking - as if you were in the same room." />
            <Benefits title="Make decisions faster" description="Stay in sync and get on the same page quicker, instead of going back and forth over email and text." />
            <Benefits title="Talk with ease" description="No more installing apps, sending links or entering PINs. Access reliable audio from your browser." />
          </div>
        </section>
        <section className="App-bottom-signup">
          <div className="section-inner">
            <h2>Try Talkmesh with your team</h2>
            <GetStarted onSubmitEmail={this.onSubmitEmail}/>
          </div>
        </section>
      </div>

    );
  }
}

export default App;
