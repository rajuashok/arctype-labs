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
          <div className="Simple-page">
            <div className="User-title">
              <h2>Tell us about your team</h2>
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
                <select
                  value={this.state.teamsize}
                  onChange={this.updateInput}
                  className="User-teamsize-input"
                  name="teamsize">
                    <option value="">Team Size</option>
                    <option value="1 - 10">1 - 10</option>
                    <option value="11 - 25">11 - 25</option>
                    <option value="26 - 50">26 - 50</option>
                    <option value="51 - 100">51 - 100</option>
                    <option value="101 - 500">101 - 500</option>
                    <option value="500+">500+</option>
                </select>
                <br/>
                <button type="submit" className="User-next-button button large-button">Next</button>
              </form>
            </div>
          </div>
          );
        }
     }
  export default User;