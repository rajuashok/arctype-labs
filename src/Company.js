import React from 'react';
import Firestore from "./Firestore";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            company: "",
            teamsize: "",
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        if (!this.state.company || !this.state.teamsize) {
          alert("Please provide company name and team size.");
        } else {
          const db = Firestore.firestore();
          const email = localStorage.getItem('se');
          db.collection("users").doc(email).update({
            company: this.state.company,
            teamsize: this.state.teamsize
          })
          this.props.history.push('/oops')
          this.setState({
            company: "",
            teamsize: "",
          });
        }
      };

    render() {
      return (
          <div>
            <div className="User-title">
              <h1>Tell us about your team</h1>
            </div>
            <div className="User-input">
              <form onSubmit={this.addUser}>
                <input
                  className="User-name-input large-input"
                  type="text"
                  name="company"
                  placeholder="Company"
                  onChange={this.updateInput}
                  value={this.state.company}
                />
                <br/>
                <input
                  className="User-name-input large-input"
                  type="team"
                  name="teamsize"
                  placeholder="Team Size"
                  onChange={this.updateInput}
                  value={this.state.teamsize}
                />
                <br/>
                <button type="submit" className="User-next-button button large-button">Next</button>
              </form>
            </div>
          </div>
          );
        }
     }
  export default User;