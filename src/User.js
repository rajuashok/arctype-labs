import React from 'react';
import Firestore from "./Firestore";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
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
        const email = localStorage.getItem('se');
        db.collection("users").doc(email).update({
            name: this.state.name,
        })
        this.props.history.push('/company')
        this.setState({
          name: ""
        });
    };

    render() {
      return (
          <form onSubmit={this.addUser}>
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