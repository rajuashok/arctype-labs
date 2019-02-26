import React, { Component } from 'react';
import './Survey.scss';

class Survey extends Component {
  render() {
    return (
      <div className="Simple-page Survey">
        <section className="section-inner">
          <div>
            <h1>Oh shoot! Looks like our servers are blowing up.</h1>
            <div className="Survey-explanation">
              <p>To keep things from falling over we’re letting in teams one by one. We'll reach out when we are ready to onboard your team.<br/><br/>Thank you for your patience.</p>
            </div>
            <div className="Survey-text-box">
              <p className="Survey-text">Fill out this quick survey to move up in the line of the teams being on-boarded.</p>
              <a target="_blank" href="https://supersignal.typeform.com/to/YshjiX"> <button type="submit" className="button large-button" >Begin Survey</button></a>
            </div>
          </div>
        </section>
      </div>

    );
  }
}

export default Survey;
