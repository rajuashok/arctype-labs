import React, { Component } from 'react';
import './App.scss';
// import { Link } from 'react-router-dom';
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

class App extends Component {
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
    });

    this.props.history.push('/user');
    localStorage.setItem('se', this.state.email);
    this.setState({
      email: ""
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Switch
        </header>
        <section className="App-title">
          <div>
            <h1>A new and better way to communicate with your distributed team</h1>
            <div className="App-title-subtitle">
              <h2>Fast, reliable and simple voice chat for teams — Create your own voice channels and organize them by team, project or whatever you’d like</h2>
            </div>
            <div className="App-get-started">
              <form onSubmit={this.submitEmail}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.updateInput}
                  value={this.state.email} />
                  <button type="submit" className="large-button">Get Started</button>
              </form>
            </div>
          </div>
        </section>
        <section className="App-image">
        </section>
        <section className="App-benefits">
          <div className="App-benefits-container">
            <Benefits title="Feel connected" description="Quickly jump into a voice channel anytime and start talking - as if you’re in the same room." />
            <Benefits title="Make decisions faster" description="Stay in sync and get right to talking instead of needlessly trying to have meaningful discussions over text." />
            <Benefits title="Talk with ease" description="No more installing apps, sending around links or entering PINs. Reliable audio in your browser." />
          </div>
        </section>
      </div>

    );
  }
}

export default App;
