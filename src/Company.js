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
        const db = Firestore.firestore();
        const email = localStorage.getItem('se');
        db.collection("users").doc(email).update({
          company: this.state.company,
          teamsize: this.state.teamsize
        })
        this.setState({
          company: "",
          teamsize: "",
        });
      };

    render() {
      return (
          <form onSubmit={this.addUser}>
            <input
              type="text"
              name="company"
              placeholder="Company"
              onChange={this.updateInput}
              value={this.state.company}
            />
            <input
              type="team"
              name="teamsize"
              placeholder="Team Size"
              onChange={this.updateInput}
              value={this.state.teamsize}
            />
            <button type="submit">Submit</button>
          </form>
          );
        }
     }
  export default User;