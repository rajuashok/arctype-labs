import React from 'react';
import Firestore from "./Firestore";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
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
        // TODO: split up email (landing page) and name (account page)
        db.collection("users").doc(this.state.email).set({
            email: this.state.email,
            name: this.state.name,
        })
        this.props.history.push('/company')
        // TODO: move this to landing page
        localStorage.setItem('se', this.state.email);
        this.setState({
          name: "",
          email: "",
        });
      };

    render() {
      return (
          <form onSubmit={this.addUser}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.updateInput}
              value={this.state.email}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.updateInput}
              value={this.state.name}
            />
            <button type="submit">Submit</button>
          </form>
          );
        }
     }
  export default User;