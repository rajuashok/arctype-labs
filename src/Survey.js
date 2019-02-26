import React, { Component } from 'react';
import './App.scss';

class Survey extends Component {
  render() {
    return (
      <div className="Survey">
        <section className="App-title section-inner">
          <div>
            <h1>Oh shoot! Looks like our servers are blowing up.</h1>
            <div className="App-title-subtitle">
                <h2>To keep things from falling over we’re letting in teams one by one, and will reach out when we are ready to onboard your team.</h2>
            </div>
            <div className="App-title-subtitle">
            <h2>If you’d like to move up in the line of the teams being on-boarded, you can fill out this quick survey.</h2>
            </div>
            <div className="App-get-started">
                  <a href="https://supersignal.typeform.com/to/UqCpPa"> <button type="submit" className="button large-button" >Begin Survey</button></a>
            </div>
          </div>
        </section>
      </div>

    );
  }
}

export default Survey;
