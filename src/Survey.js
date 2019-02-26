import React, { Component } from 'react';
import './Survey.scss';

class Survey extends Component {
  render() {
    const email = localStorage.getItem('se');
    const surveyLink = 'https://supersignal.typeform.com/to/YshjiX?email=' + email;

    return (
      <div className="Simple-page Survey">
        <section className="section-inner">
          <div>
            <h1>You're almost there...</h1>
            <div className="Survey-explanation">
              <p>We’re manually onboarding teams one by one and need a bit more information about your team before we can proceed.</p>
            </div>
            <p className="Survey-text">Please fill out this quick questionnaire to continue:</p>
            <a target="_blank" href={surveyLink}> <button type="submit" className="button large-button" >Begin</button></a>
          </div>
        </section>
      </div>

    );
  }
}

export default Survey;
